import angular = require('angular');
require('angular-socket-io');
require("./scoreboard.scss");


export module Scoreboard {
    var templateUrl = require('ngtemplate!html!./scoreboard.html');

    let ScoreboardModule = angular.module('Scoreboard', ["btford.socket-io"])
        .directive('tomDirective', function (): any {
            return {
                template: 'hi damnit'
            }
        });



    class Player {

        private score: number = 0;
        public isWinner: boolean = false;

        public incrementScore(): number {

            this.score++;          

            return this.score;
        }

        public decrementScore(): number {

            this.score--;

            //cant go below zero
            if (this.score < 0) {
                this.score = 0;
            }
            return this.score;
        }


    }

    class ScoreboardController {

        private playerOne: Player = new Player();
        private playerTwo: Player = new Player();

        private matchDate: Date = new Date();

        constructor(mySocket) {           

            mySocket.on('one', () => {
                this.incrementPlayerScore(this.playerOne);
            });

            mySocket.on('one-down', () => {
                this.decrementPlayerScore(this.playerOne);
            });

            mySocket.on('two', () => {
                this.incrementPlayerScore(this.playerTwo);
            });

            mySocket.on('two-down', () => {
                this.decrementPlayerScore(this.playerTwo);
            });
            
        }

        public incrementPlayerScore(player : Player): number {

            return player.incrementScore();

        }

        public decrementPlayerScore(player: Player): number {

            return player.decrementScore();

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








