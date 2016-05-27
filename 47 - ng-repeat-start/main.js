var app = angular.module("app", []);

app.controller('RoomCtrl', function () {
    this.things = ["one", "two", "three"];
    console.log(this.things);
});
