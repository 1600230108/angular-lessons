var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/map/:country/:state/:city", {
            templateUrl:"app.html",
            controller:"AppCtrl"
        })
})

app.controller("AppCtrl", function($scope,$routeParams) {
    console.log($routeParams);
    $scope.model = {
        message: "Address : " + 
            $routeParams.country + "," + 
            $routeParams.state + "," + 
            $routeParams.city
    }
})
