var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"app.html",
            controller:"AppCtrl",
            resolve: { //happen before load app.html and AppCtrl
                app: function($q, $timeout) {  //属性命名
                    var defer = $q.defer();
                    $timeout(function() {   
                        defer.resolve();
                    }, 2000)
                    return defer.promise;
                }
            }
        })
})

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!"
    }
})
