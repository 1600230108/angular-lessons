var app = angular.module('drinkApp', []);

app.controller('appCtrl', function($scope) {
    $scope.ctrlFlavor = "blackberry";
})


app.directive('drink', function() {
    return {
        scope: {
           flavor: "=" 
        },
        template: '<input type="text" ng-model="flavor" />'   //在<div drink flavor="ctrlFlavor"></div>之间创建模板 : '<input type="text" ng-model="flavor" />'
    }
})

