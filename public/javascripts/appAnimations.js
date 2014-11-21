var appAnimations = angular.module('appAnimations', []);
appAnimations.animation('.question-out', ['$window', function ($window) {
    return {
      enter: function(element, done) {
        TweenMax.fromTo(element, 1, {x:-1000}, {x:0}); 
        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done){
        TweenMax.fromTo(element, 1, {x: 0}, {x:-1000});
      }

    }
  }]);

appAnimations.animation('.question-in', ['$window', function ($window) {
    return{  
      enter: function(element, done) {
        TweenMax.set(element, {y: -100});
        TweenMax.fromTo(element, 1, {x:-1000}, {x:0}); 
        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done){
        TweenMax.fromTo(element, 1, {x: 0}, {x:-1000});
      }

    }
  }]);

appAnimations.animation('.category-animation', ['$window', function ($window){
  return{
      addClass: function(element, done) {
        TweenMax.fromTo(element, 0.5, {height:0}, {height:320});
        TweenMax.staggerFromTo(".category-button", 1, {y: -1000}, {y:0}, 0.5);      
      }
  }
}]);