var app = angular.module('drinkApp', []);

app.controller('appCtrl', function($scope) {
})

/*
app.directive('drink', function() {
    return {
        // restrict: 'A',  //指令为attribute,默认为A，故可以省略掉
        scope: {},
        template: '<div>{{flavor}}</div>',  //在<div drink></div>之间创建模板 : '<div>{{flavor}}</div>'
        link: function(scope, element, attrs) {
            scope.flavor = attrs.flavor;  //attrs.flavor → <div drink flavor="strawberry"></div>，也就是将"strawberry"赋值给scope.flavor
            // scope.flavor = "cherry";
        }
    }
})
*/

//这两种写法的效果相同
app.directive('drink', function() {
    return {
        scope: {
           flavor: "@"
        },
        template: '<div>{{flavor}}</div>'
    }
})


