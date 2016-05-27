var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"app.html",
            controller:"viewCtrl",
            resolve: {
                loadData: viewCtrl.loadData,
            }
        })
})

app.controller("AppCtrl", function($rootScope) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        console.log(event);
        console.log(current);
        console.log(previous);
        console.log(rejection);
    })
})

var viewCtrl = app.controller("viewCtrl", function($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "This is my app!"
    }
})

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        // defer.resolve();
        defer.reject("Your network is down");
    }, 2000);
    return defer.promise;
}
