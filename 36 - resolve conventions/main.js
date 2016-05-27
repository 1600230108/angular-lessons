var app = angular.module("app", []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"app.html",
            controller:"AppCtrl",
            resolve: {
                loadData: appCtrl.loadData,
                prepData: appCtrl.prepData
            }
        })
})

var appCtrl = app.controller("AppCtrl", function($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "This is my app!"
    }
})

appCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve("loadData");
    }, 2000);
    return defer.promise;
}

appCtrl.prepData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve("prepData");
    }, 2000);
    return defer.promise;
}

console.log(appCtrl);   //其实就是app
/*
_invokeQueue: Array[2]
_runBlocks: Array[0]
config: function (){b[e||"push"]([c,d,arguments]);return k}
constant: function (){b[e||"push"]([c,d,arguments]);return k}
controller: function (){b[e||"push"]([c,d,arguments]);return k}
directive: function (){b[e||"push"]([c,d,arguments]);return k}
factory: function (){b[e||"push"]([c,d,arguments]);return k}
filter: function (){b[e||"push"]([c,d,arguments]);return k}
loadData: function ($q, $timeout) {
name: "app"
prepData: function ($q, $timeout) {
provider: function (){b[e||"push"]([c,d,arguments]);return k}
requires: Array[0]
run: function (a){c.push(a);return this}
service: function (){b[e||"push"]([c,d,arguments]);return k}
value: function (){b[e||"push"]([c,d,arguments]);return k}
*/
