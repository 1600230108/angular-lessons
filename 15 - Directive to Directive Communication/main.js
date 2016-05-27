
var app = angular.module('superApp', []);

app.directive('superhero', function() {
    return {
        restrict: 'E',
        
        scope: {},

         // name: 'superheroCtrl',   //若是用name指令的controller的名字，则require: 'superheroCtrl'

        controller: function($scope) {
            $scope.abilities = [];

            this.addStrength = function() {
                $scope.abilities.push('strength');
            }

            this.addSpeed = function() {
                $scope.abilities.push('speed');
            }

            this.addFlight = function() {
                $scope.abilities.push('flight');
            }
        },

        link: function(scope, element) {
            element.addClass('button');
            element.bind('mouseenter', function() {
                console.log(scope.abilities);
            })
        }
    } 
});

app.directive('strength', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    }
})

app.directive('speed', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    }
})

app.directive('flight', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    }
})

/*
var app = angular.module('superApp', []);

app.directive('superhero', function() {
    return {
        restrict: 'E',
        scope: {},
        // name: 'superheroCtrl',   //若是用name指令的controller的名字，则require: 'superheroCtrl'
        controller: function($scope) {
            // console.log(this); //Constructor {} 
            $scope.abilities = [];

            this.addStrength = function() {
                $scope.abilities.push('strength');
            }

            this.addSpeed = function() {
                $scope.abilities.push('speed');
            }

            this.addFlight = function() {
                $scope.abilities.push('flight');
            }
            // console.log(this); //Constructor {addStrength: function, addSpeed: function, addFlight: function}
        },
        link: function(scope, element) {
            element.addClass('button');
            element.bind('mouseenter',function() {
                console.log(scope.abilities);
            })
        }
    }
})


app.directive('strength', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    }
})

app.directive('speed', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    }
})
app.directive('flight', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    }
})
*/
