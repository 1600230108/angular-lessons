var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"app.html",
            controller:"AppCtrl"
        })
        .when("/pizza/:crust/:toppings", {
            //33 - redirectTo.html#/pizza/deep/pepperonl?delivery=now
            redirectTo: function(routeParams, path, search) {
                console.log(routeParams);   //Object { crust: "deep", toppings: "pepperonl"}
                console.log(path);  ///pizza/deep/pepperonl
                console.log(search);    //Object { delivery: "now"}
                return "/" + routeParams.crust;
            }
        })
        .when("/deep", {
            template: "<h1>Deep dish</h1>"
        })
        .otherwise({
            redirectTo: "/"  
        })
})

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!"
    }
})
