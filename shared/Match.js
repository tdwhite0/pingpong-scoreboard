var Player = require('./Player');
var Point = require('./Point');
var MatchHistory = require('./MatchHistory');
var PlayerNumber = require('./PlayerNumber');
var WinConditions = require('./WinConditions');
var Match = (function () {
    function Match() {
        this.matchDateTime = new Date();
        this.matchHistory = new MatchHistory();
        this.playerOne = new Player("PlayerOne");
        this.playerTwo = new Player("PlayerTwo");
    }
    Match.prototype.awardPoint = function (playerNumber) {
        var scoringPlayer = this.get_player(playerNumber);
        this.matchHistory.logPoint(new Point(scoringPlayer));
        this.checkWinConditions();
        return scoringPlayer.incrementScore();
    };
    Match.prototype.subtractPoint = function (playerNumber) {
        var scoringPlayer = this.get_player(playerNumber);
        this.matchHistory.logPoint(new Point(scoringPlayer, true));
        this.checkWinConditions();
        return scoringPlayer.decrementScore();
    };
    Match.prototype.get_player = function (playerNumber) {
        var thePlayer;
        if (playerNumber === PlayerNumber.One) {
            thePlayer = this.playerOne;
        }
        if (playerNumber === PlayerNumber.Two) {
            thePlayer = this.playerTwo;
        }
        return thePlayer;
    };
    Match.prototype.checkWinConditions = function () {
        var haveWinner = WinConditions.player21Win(this.playerOne, this.playerTwo);
        if (haveWinner) {
            alert('we have a winner');
            return true;
        }
        else {
            return false;
        }
    };
    return Match;
})();
module.exports = Match;
//# sourceMappingURL=Match.js.map