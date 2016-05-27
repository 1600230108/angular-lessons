var app = angular.module("phoneApp", []);
app.controller("AppCtrl", function($scope) {
    $scope.callHome = function(message) {
        alert(message);
    }
})

app.directive("phone", function() {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value" />' + 
            '<button ng-click="dial( {message:value} )">Call home!</button>'
    }
})
/*
app.controller("AppCtrl", function($scope) {
    $scope.callHome = function() {
        alert("Call home!");
    }
})

app.directive("phone", function() {
    return {
        scope: {
            dial: "&" //scope.dial = function(){dial();}
        },
        template: '<button ng-click="dial()">Call home!</button>'
    }
})
*/
