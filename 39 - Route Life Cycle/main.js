var app = angular.module("app", []);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"view/app.html",
            controller:"viewCtrl"
        })
        .when("/new", {
            templateUrl:"view/new.html",
            controller:"newCtrl",
            resolve: {
                loadData: viewCtrl.loadData,
            }
        })
})

//AppCtrl
app.controller("AppCtrl", function($rootScope, $scope, $route, $location) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        console.log(rejection);
    })

    $rootScope.$on("$routeChangeStart", function(event, current, previous, rejection) {
        console.log(2,$rootScope, $scope, $route, $location); //2
    })

    $rootScope.$on("$routeChangeSuccess", function(event, current, previous, rejection) {
        console.log(3,$rootScope, $scope, $route, $location); //3
    })

})

//viewCtrl
var viewCtrl = app.controller("viewCtrl", function($scope, $route, $location) {
    $scope.changeRoute = function() {
        console.log(1,$scope, $route, $location); //1   
        $location.path("/new");
    }
})

//newCtrl
app.controller("newCtrl", function($scope, $route, $location) {
    console.log(4,$scope, $route, $location); //4
})

//viewCtrl.loadData
viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve({message: 'success'});
        /* defer.reject("Your network is down"); */
    }, 500);
    return defer.promise;
}
