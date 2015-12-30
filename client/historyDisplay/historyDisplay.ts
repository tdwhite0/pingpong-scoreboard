import angular = require('angular');
import MatchHistory = require("../../shared/MatchHistory");
import Point = require("../../shared/Point");
require("angular-filter");


let template = require('ngtemplate!html!./historyDisplay.html');

class HistoryDisplayController {

    

    constructor() {
        console.log(this);
    }

}



angular.module("MatchHistory", ["angular.filter"]);


let MatchHistoryDirective: angular.IDirectiveFactory = function() {
    return {
        templateUrl: template,
        controller: HistoryDisplayController,
        controllerAs: "vm",
        bindToController: true,
        scope: {
            entries : '='
        }
    } 

}

angular.module("MatchHistory").directive("matchHistory", MatchHistoryDirective);


