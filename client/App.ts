

import angular = require("angular");



require("./scoreboard/scoreboard");
require("./App.scss");


var templateUrl = require('ngtemplate!html!./App.html');




angular.module("PingPong", []);

let app = angular.module("PingPong", ["Scoreboard"]);

app.directive('mainApp', function () {
    return {
        restrict: 'E',
        templateUrl: templateUrl
    }
});

