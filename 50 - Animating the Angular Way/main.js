var app = angular.module("MyApp", ['ngAnimate']);

app.controller("AppCtrl", function() {
    this.isHidden = false;
    this.fadeIt = function() {
        this.isHidden = !this.isHidden;
    }
})

app.directive("hideMe", function($animate) {
    return function(scope, element, attrs) {
        console.log(attrs.hideMe); //hide-me的属性值
        scope.$watch(attrs.hideMe, function(newValue) {
            if(newValue) {
                $animate.addClass(element, "fade");
            } else {
                $animate.removeClass(element, "fade");
            }
        })
    }
})

app.animation(".fade", function() {
    return {
        addClass: function(element, className, done) {
            TweenMax.to(elment, 1, {opacity:0});
        },
        removeClass: function(elment, className, done) {
            TweenMax.to(elment, 1, {opacity:1});
            
        }
    }
})
