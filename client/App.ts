﻿/// <reference path="../typings/tsd.d.ts" />


import angular = require("angular");

require("./scoreboard/scoreboard");
require("./historyDisplay/historyDisplay");
require("./App.scss");


var templateUrl = require('ngtemplate!html!./App.html');



angular.module("PingPong", []);

let app = angular.module("PingPong", ["Scoreboard", "MatchHistory"]);

app.directive('mainApp', function () {
    return {
        restrict: 'E',
        templateUrl: templateUrl
    }
});



