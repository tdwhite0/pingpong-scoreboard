var angular = require('angular');
require('angular-socket-io');
require("./scoreboard.scss");
var Scoreboard;
(function (Scoreboard) {
    var templateUrl = require('ngtemplate!html!./scoreboard.html');
    var ScoreboardModule = angular.module('Scoreboard', ["btford.socket-io"])
        .directive('tomDirective', function () {
        return {
            template: 'hi damnit'
        };
    });
    var Player = (function () {
        function Player() {
            this.score = 0;
            this.isWinner = false;
        }
        Player.prototype.incrementScore = function () {
            this.score++;
            return this.score;
        };
        Player.prototype.decrementScore = function () {
            this.score--;
            //cant go below zero
            if (this.score < 0) {
                this.score = 0;
            }
            return this.score;
        };
        return Player;
    })();
    var ScoreboardController = (function () {
        function ScoreboardController(mySocket) {
            var _this = this;
            this.playerOne = new Player();
            this.playerTwo = new Player();
            this.matchDate = new Date();
            mySocket.on('one', function () {
                _this.incrementPlayerScore(_this.playerOne);
            });
            mySocket.on('one-down', function () {
                _this.decrementPlayerScore(_this.playerOne);
            });
            mySocket.on('two', function () {
                _this.incrementPlayerScore(_this.playerTwo);
            });
            mySocket.on('two-down', function () {
                _this.decrementPlayerScore(_this.playerTwo);
            });
        }
        ScoreboardController.prototype.incrementPlayerScore = function (player) {
            return player.incrementScore();
        };
        ScoreboardController.prototype.decrementPlayerScore = function (player) {
            return player.decrementScore();
        };
        return ScoreboardController;
    })();
    var ScoreboardDirective = function () {
        return {
            templateUrl: templateUrl,
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
})(Scoreboard = exports.Scoreboard || (exports.Scoreboard = {}));
//# sourceMappingURL=scoreboard.js.map