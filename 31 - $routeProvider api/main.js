var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"app.html",
            controller:"AppCtrl"
        })
        .when("/pizza", {
            template: "<h1>Yum!</h1>",
        })
        .when("/pizza/:pizzaid", {
            template: "<h1>嘿嘿！</h1>",
        })
        .otherwise({
            template: "<h1>This doesn't exist!</h1>"
        })
        // .otherwise({
        //     redirectTo: "/"  
        // })
})

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!"
    }
})
