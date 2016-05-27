var app = angular.module("app", []);

app.service("Store", function() {
    this.products = {item:"apple"}
})

/*
app.controller("AppCtrl", function($scope, Store) {
    $scope.products = Store.products;
})
*/
app.controller("AppCtrl", ["$scope", "Store", function(p, o) {
    p.products = o.products;
}])
