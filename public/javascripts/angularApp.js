
var appControllers = angular.module('appControllers', ['mapModule', 'ui.bootstrap', 'ngAnimate', 'appAnimations']);

appControllers.controller('MainController', ['$scope', '$timeout', '$http', '$filter','$routeParams', '$window', '$location', 'mapService', function ($scope, $timeout, $http, $filter, $routeParams, $window, $location, mapService) {
    
    var popup;
    var marker;

    function reverseGeoCoding(latLng) {
      return $http.get('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + latLng.lat + '&lon='+ latLng.lng).
                success(function(data, status, headers, config) {

        }).
        error(function(data, status, headers, config) {
        });
    };

    function setCurrentAnswer(){
        reverseGeoCoding($scope.markerDroppedLocation).then(function(result){
            if(!angular.isUndefined(result.data.address)){
                if(!angular.isUndefined(result.data.address.country)){
                    $scope.country = result.data.address.country;
                }
                if(!angular.isUndefined(result.data.address.city)){
                    $scope.city = result.data.address.city;
                }
                else if(!angular.isUndefined(result.data.address.county)){
                        $scope.city = result.data.address.county;
                }
                $scope.marker.bindPopup("<h5 style='visibility: visible;'>Pin dropped at: " + $scope.city + " " + $scope.country + "</h5>").openPopup();
            }

        });
    };
    function initializeGame(){
        $scope.numberOfQuestionsAnswered = 1;
        $scope.marker = mapService.getMarker();
        $scope.country = '';
        $scope.city = '';
        $scope.score = 1609;
        $scope.gameOver = false;
        $scope.gameFinished = false;
        $scope.proba = true;
        mapService.removeLine;
        $scope.questions = $filter('getByCategoryId')(questions1, $routeParams.id);
    };
    function setCurrentQuestion(){
        $scope.currentQuestion = $scope.questions[Math.floor(Math.random()*$scope.questions.length)];
        $scope.correctAnswerLocation = L.latLng($scope.currentQuestion.answer.lat, $scope.currentQuestion.answer.lng);
        $scope.marker.setLatLng([$scope.currentQuestion.answer.lat-10, $scope.currentQuestion.answer.lng+10]);
        $scope.markerDroppedLocation = $scope.marker.getLatLng();
        map.panTo($scope.marker.getLatLng());
    }

    $scope.startGame = function(){
        initializeGame();
        setCurrentQuestion();
        setCurrentAnswer();
    }
    $scope.startGame();

    function onMarkerDragEnd(e) {
        $scope.markerDroppedLocation = $scope.marker.getLatLng();
        map.panTo($scope.markerDroppedLocation);
        setCurrentAnswer();
    }
    $scope.marker.on('dragend', onMarkerDragEnd);


    $scope.changeQuestion = function(){

        while($scope.currentQuestion.answered){
            $scope.currentQuestion = $scope.questions[Math.floor(Math.random()*$scope.questions.length)];
            if($scope.numberOfQuestionsAnswered-1==$scope.questions.length){
                $scope.marker.closePopup();
                $scope.gameFinished = true;
                return;
            }
        }
        $scope.marker.closePopup();
        $scope.correctAnswerLocation = L.latLng($scope.currentQuestion.answer.lat, $scope.currentQuestion.answer.lng);
        $scope.marker.setLatLng([$scope.currentQuestion.answer.lat-10, $scope.currentQuestion.answer.lng+10]);
        map.panTo($scope.marker.getLatLng());
        $scope.markerDroppedLocation = $scope.marker.getLatLng();
        map.refresh();
    }

    $scope.calculateScore = function(){
        $scope.distance = ($scope.correctAnswerLocation.distanceTo($scope.markerDroppedLocation)/1000).toFixed(0);
        $scope.score = $scope.score - $scope.distance;
        if($scope.score<=0){
            $scope.gameOver = true;
            mapService.removeLine();
        }

    }
    $scope.submitAnswer = function(){
        $scope.correctAnswerCountry = '';
        $scope.correctAnswerCity = '';
        $scope.marker.closePopup();
        reverseGeoCoding($scope.correctAnswerLocation).then(function(result){
            if(!angular.isUndefined(result.data.address)){
                if(!angular.isUndefined(result.data.address.country)){
                    $scope.correctAnswerCountry = result.data.address.country;
                }
                if(!angular.isUndefined(result.data.address.city)){
                    $scope.correctAnswerCity = result.data.address.city;
                }
                else if(!angular.isUndefined(result.data.address.county)){
                        $scope.correctAnswerCity = result.data.address.county;
                }
        }
        var answer = $scope.markerDroppedLocation;
        $scope.currentQuestion.answered = true;
        if(($scope.city == $scope.correctAnswerCity)&&($scope.country == $scope.correctAnswerCountry)){
            $scope.marker.bindPopup("<h4 style='visibility: visible; color: green;'>Correct answer!</h4>").openPopup();
            $scope.proba = false;

        }
        else{
            $scope.calculateScore();
            $scope.proba = false;
            mapService.addLine(answer, $scope.correctAnswerLocation);
            mapService.addCorrectAnswerMarker($scope.correctAnswerLocation);
            map.getLmap().fitBounds([[$scope.correctAnswerLocation.lat, $scope.correctAnswerLocation.lng], answer]);
            var popupLocation = [(answer.lat+$scope.correctAnswerLocation.lat)/2, (answer.lng+$scope.correctAnswerLocation.lng)/2];
             popup = L.popup()
            .setLatLng(popupLocation)
            .setContent("Correct answer: " + $scope.correctAnswerCity + ", " + $scope.correctAnswerCountry + "</br>" + "Distance: " + $scope.distance + " km")
            .openOn(map.getLmap());
        }



   });

    }
    $scope.nextQuestion = function(){
        map.getLmap().closePopup(popup);
        $scope.city = '';
        $scope.country = '';
        $scope.numberOfQuestionsAnswered +=1;
        $scope.changeQuestion();
        $scope.proba = true;
        mapService.removeCorrectAnswerMarker();
        map.getLmap().setZoom(4);
        mapService.removeLine();
        setCurrentAnswer();
        map.refresh();
    }

    $scope.reloadGame = function(){
      $window.location.href = '/';
    }


}]);

appControllers.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $scope.categories = [
        {id:1, name:'Science', color: '#f97878'},
        {id:2, name:'Entertainment', color: '#8fdff4'},
        {id:3, name:'History', color: '#fff16a'},
        {id:4, name:'Sports', color: '#cf7efd'},
        {id:5, name:'Arts and Culture', color: '#95d886'}

    ];

}]);

appControllers.directive('categoryAdd',  ['$window', '$animate', function ($window, $animate) {
  return function(scope, element) {
    angular.element($window).bind('click', function() {
        $animate.addClass(element, "category-animation");
    });
  }
}]);


appControllers.filter('getByCategoryId', function() {
  return function(questions, categoryId) {
    var categoryQuestions = [];
    var i=0, len=questions.length;
    for (; i<len; i++) {
      if (+questions[i].category.id ===+categoryId) {
        categoryQuestions.push(questions[i]);
      }
    }
    return categoryQuestions;
  }
});


