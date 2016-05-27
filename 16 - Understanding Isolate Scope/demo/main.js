var app = angular.module('choreApp', []);

app.directive('kid', function() {
    return {
        restrict: 'E',  //指令为element元素
        scope: {}, //当有多个kid时，限制每个kid在其中的scope作用域内,互不影响
        template: '<input type="text" ng-model="chore" />{{chore}}<br />' //意思是<kid></kid>之间创建模板：'<input type="text" ng-model="chore" />{{chore}}<br />'
    }
})



/************ scope:false (默认)时的html***************/   // false 节点的 scope 
/*
<div ng-app="choreApp" class="ng-scope">
        <kid class="ng-binding"><input type="text" ng-model="chore" class="ng-pristine ng-valid"><br></kid>
        <kid class="ng-binding"><input type="text" ng-model="chore" class="ng-pristine ng-valid"><br></kid>
</div>
*/


/************* scope: {}时的html***************/ //{} 不继承创建一个新的隔离 scope 
/*
<div ng-app="choreApp" class="ng-scope">
    <kid class="ng-isolate-scope ng-scope ng-binding"><input type="text" ng-model="chore" class="ng-pristine ng-valid"><br></kid>
    <kid class="ng-isolate-scope ng-scope ng-binding"><input type="text" ng-model="chore" class="ng-pristine ng-valid"><br></kid>
</div>
*/

/****************scope: true时的html*************/  // true 继承创建一个新的 scope 
/*
<div ng-app="choreApp" class="ng-scope">
    <kid class="ng-scope ng-binding"><input type="text" ng-model="chore" class="ng-pristine ng-valid"><br></kid>
    <kid class="ng-scope ng-binding"><input type="text" ng-model="chore" class="ng-pristine ng-valid"><br></kid>
</div>
*/

