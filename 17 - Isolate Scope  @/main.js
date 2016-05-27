var app = angular.module('drinkApp', []);

app.controller('appCtrl', function($scope) {
    $scope.ctrlFlavor = "blackberry";
})


app.directive('drink', function() {
    return {
        scope: {
           flavor: "@" 
        },
        template: '<div>{{flavor}}</div>'
    }
})


