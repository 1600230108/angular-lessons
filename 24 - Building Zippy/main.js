var app = angular.module("app", []);

app.directive("zippy", function() {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@" //scope.title 为 zippy指令的title的属性值（{{model.title}}）
        },
        template: '<div>'+
                        '<h3 ng-click="toggleContent()">{{title}}</h3>' +
                        '<div ng-show="isContentVisible" ng-transclude></div>' +
                  '</div>',
        link: function(scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
})

/*
    ng-transclude属性些在哪个元素上，就将<zippy></zippy>中的内容部分，即 The content is: {{model.content}}放到那个元素中去
*/
/*
 *  最后形成的html为：
        <input type="text" ng-model="model.title" class="ng-pristine ng-valid">
        <input type="text" ng-model="model.content" class="ng-pristine ng-valid">

        <zippy title="" class="ng-isolate-scope ng-scope">
            <div>
                <h3 ng-click="toggleContent()" class="ng-binding"></h3>
                <div ng-show="isContentVisible" ng-transclude="" style="display: none;">
                    <span class="ng-scope ng-binding">The content is: </span>
                </div>
            </div>
        </zippy>

*/
