var app = angular.module("app", []);

app.run(function($templateCache) {
    $templateCache.put("zippy.html", '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>');
    console.log($templateCache.info());
});


app.directive("zippy", function($templateCache) {
    // console.log($templateCache); 
    /*
         Object {
             destroy: function () {}
             get: function (key) {}
             info: function () {}
             put: function (key, value) {}
             remove: function (key) {}
             removeAll: function () {}
         }
     */

    // console.log($templateCache.get("zippy.html"));
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        templateUrl: "zippy.html",
        link: function(scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
})
