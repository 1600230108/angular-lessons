var app = angular.module("app", []);


app.controller('MyCtrl', function($scope) {
    console.log($scope);
})

app.directive("myDirective", function() {
    return {
        // scope: {},  //create a new scope
        link: function(scope) {
            console.log(scope);   //和控制器中的scope相同
        }
    }

})
