var app = angular.module("app", []);


/************4**********/
app.provider("game", function() {
    return {
        setType: function(value) {
            type = value;
        },
        $get: function() {
            return {
                title: type + "Craft"
            }
        }
    }
})

app.config(function(gameProvider) {
    gameProvider.setType("War");
})


/************3**********/
/*
app.config(function($provide) {
    $provide.provider("game", function() {
        return {
            $get: function() {
                return {
                    title: "StartCraft"
                }
            }
        }
    })
    console.log($provide.provider);
        // constant: function (key, value) {}
        // decorator: function decorator(serviceName, decorFn) {}
        // factory: function (key, value) {}
        // provider: function (key, value) {}
        // service: function (key, value) {}
        // value: function (key, value) {}
})
*/


/***********2***********/
/*
app.config(function($provide) {
    $provide.factory("game", function() {
        return {
            title: "StartCraft"
        }
    })
})
*/


/************1**********/
/*
app.factory("game", function() {
    return {
        title: "StartCraft"
    }
})
*/

app.controller("AppCtrl", function($scope, game) {
    $scope.title = game.title;
})
