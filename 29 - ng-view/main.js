var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"app.html",
        controller:"AppCtrl"
    })
    // .otherwise({
    //     redirectTo: "/home"
    // })
})

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!"
    }
})
