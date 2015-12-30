import angular = require('angular');
import Player = require("../../shared/Player");
import PlayerNumber = require("../../shared/PlayerNumber");
import MatchHistory = require("../../shared/MatchHistory");
import Point = require("../../shared/Point");
import Match = require("../../shared/Match");


require('angular-socket-io');
require("./scoreboard.scss");


export module Scoreboard {
    var templateUrl = require('ngtemplate!html!./scoreboard.html');

    let ScoreboardModule = angular.module('Scoreboard', ["btford.socket-io"]);    
  
    class ScoreboardController extends Match   {       

        constructor(mySocket) {           

            super();

            mySocket.on('one', () => {
                this.awardPoint(PlayerNumber.One);
            });

            mySocket.on('one-down', () => {
                this.subtractPoint(PlayerNumber.One);
            });

            mySocket.on('two', () => {
                this.awardPoint(PlayerNumber.Two);
            });

            mySocket.on('two-down', () => {
                this.subtractPoint(PlayerNumber.Two);
            });
            
        }
        
    }

    let ScoreboardDirective: angular.IDirectiveFactory = function () {
        return {
            templateUrl,
            controller: ScoreboardController,
            restrict: 'E',
            controllerAs: 'vm',
            bindToController: true  
        };
    };

    ScoreboardModule.factory('mySocket', function (socketFactory) {
        return socketFactory();
    });

    ScoreboardModule.directive("scoreboard", ScoreboardDirective);

}








