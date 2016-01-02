import angular = require("angular");



require("angular-ui-router");



require("./components/scoreboard/scoreboard");
require("./routes/controls/Controls");
require("./components/historyDisplay/historyDisplay");
require("./App.scss");


var templateUrl = require('ngtemplate!html!./App.html');




angular.module("PingPong", []);

let app = angular.module("PingPong", ["ui.router", "Scoreboard", "MatchHistory", "GameControls"]);

app.directive('mainApp', function () {
    return {
        restrict: 'E',
        templateUrl: templateUrl
    }
});

app.config(function ($stateProvider, $urlRouterProvider) {

    
    $urlRouterProvider.otherwise("/game");

    $stateProvider
        .state('game', {
            url: "/game",
            templateUrl: templateUrl
        });

  

});



    



