var app = angular.module("app", []);

app.directive("country", function() {
    return {
        restrict: "E",
        controller: function() {
            this.makeAnnouncement = function(message) {
                console.log("Country says:" + message);
            }
        }
    }
})

app.directive("state", function() {
    return {
        restrict: "E",
        controller: function() {
            this.makeLaw = function(law) {  
                console.log("Law:" + law);
            }
        }
    }
})

app.directive("city", function() {
    return {
        restrict: "E",
        require: "^country",
        link: function(scope, element, attrs, countryCtrl) {
            console.log(countryCtrl);
            countryCtrl.makeAnnouncement("This city rocks");
        }
    }
})

/*
app.directive("city", function() {
    return {
        restrict: "E",
        require: "^state",
        link: function(scope, element, attrs, stateCtrl) {
            stateCtrl.makeLaw("Jump higher");
        }
    }
})
*/
