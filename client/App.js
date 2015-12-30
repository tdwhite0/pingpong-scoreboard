var angular = require("angular");
require("./scoreboard/scoreboard");
var templateUrl = require('ngtemplate!html!./App.html');
angular.module("PingPong", []);
var app = angular.module("PingPong", ["Scoreboard"]);
app.directive('mainApp', function () {
    return {
        restrict: 'E',
        templateUrl: templateUrl
    };
});
//# sourceMappingURL=App.js.map