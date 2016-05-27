var app = angular.module("app", []);

app.factory("game", function() {
    return {
        title: "StartCraft"
    }
})
/**********2**********/
app.controller("AppCtrl", function($scope, $injector) {
    $injector.invoke(function(game) {
        $scope.title = game.title;
        alert(game.title);
    })
})

/**********1**********/
/*
angular.injector(["app"]).invoke(function(game) {
    alert(game.title);
})


app.controller("AppCtrl", function($scope, game) {
    $scope.title = game.title;
})
*/

// inject [in'd3ekt] v. 注射；注入；
// invoke [in'v3uk] vt.援引；引起；求助；请求；

