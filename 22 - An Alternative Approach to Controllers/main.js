var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    console.log(this);
    this.sayHi = function() {
        alert("Hi");
    }

    console.log(this);
    return $scope.AppCtrl = this;
});

