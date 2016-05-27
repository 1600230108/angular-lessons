var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {

});

app.directive('panel', function() {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel" ng-transclude><span>This is a panel component!</span></div>'
    }
})

/*
transclude: true
    <panel>
        <div class="panel" ng-transclude="">
        This is a panel component!
            <button class="ng-scope"> click me! </button>
        </div>
    </panel>

transclude: false时
    <panel>
        <div class="panel" ng-transclude="">
            This is a panel component!
        </div>
    </panel>

*/
