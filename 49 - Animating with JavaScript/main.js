var app = angular.module("MyApp", ['ngAnimate']);

app.controller("AppCtrl", function() {
    this.toggle = false;
})

app.animation(".toggle", function() {
    return {
        leave: function(element, done) { //done的作用：remove the element
           TweenMax.fromTo(element, 1, {opacity:1}, {opacity:0, onComplete:done}) 
        },
        enter: function(element, done) { 
           TweenMax.fromTo(element, 1, {opacity:1}, {opacity:1, onComplete:done}) 
        }
    }
})
