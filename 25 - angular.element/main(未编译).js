var app = angular.module("app", []);

app.directive("dumbPassword", function() {
    return {
        restrict: "E",
        replace: true,
        template: '<div><input type="text" ng-model="model.input" /><div>{{model.input}}</div></div>',
        link: function(scope, element) {
            scope.$watch("model.input", function(value) {
                if(value === 'password') {
                    console.log(element);
                    // element.children().eq(1).toggleClass("alret-box alert");
                    element.children(1).toggleClass("alert-box alert");
                }
            })
        }
    }
})

/*
    element 指的是angular的 '<div>...</div>'元素
*/

