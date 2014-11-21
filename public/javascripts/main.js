var app = angular.module('app', ['ngRoute', 'appControllers'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider. 
    when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
    when('/map', {
        templateUrl: 'partials/game.html',
        controller: 'MainController'

    }).
    when('/game/:id', {
        templateUrl: 'partials/game.html',
        controller: 'MainController'

    }).
    otherwise({
        redirectTo: '/'
    });
}]);