var app = angular.module('choreApp', []);

app.controller('ChoreCtrl', function($scope) {
    $scope.logChore = function(chore) {
        alert(chore + ' is done!');
    }
})


app.directive('kid', function() {
    return {
        restrict: 'E',  //指令为element元素
        scope: {
            done: "&"               //&为logChore的映射
        }, //当有多个kid时，限制每个kid在其中的scope作用域内,互不影响
        template: '<input type="text" ng-model="chore" />'+
            '{{chore}}<br />' + 
            '<button ng-click="done({chore:chore})">I\'m done!</button>'
    }
})

/*
<kid done="logChore(chore)" class="ng-isolate-scope ng-scope ng-binding">
    <input type="text" ng-model="chore" class="ng-pristine ng-valid">
    <br>
    <button ng-click="done({chore:chore})">I'm done! </button>
</kid>

*/

