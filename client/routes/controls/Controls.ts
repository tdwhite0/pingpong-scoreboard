import angular = require("angular");

let templateUrl = require("ngtemplate!html!./Controls.html");

angular.module("GameControls", ["ui.router"])

    .config(function ($stateProvider, $urlRouterProvider) {
   
    $stateProvider
        .state('controls', {
            url: "/controls",
            templateUrl: templateUrl
        });

});





