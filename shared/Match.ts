import Player = require('./Player');
import Point = require('./Point');
import MatchHistory = require('./MatchHistory');
import PlayerNumber = require('./PlayerNumber');
import WinConditions = require('./WinConditions');



class Match {

    private playerOne: Player;
    private playerTwo: Player;

    private matchDateTime: Date;
    private matchWinner: Player;
    private winnersScore: number;
    private losersScore: number;
    private matchHistory: MatchHistory;    
    

    constructor() {
        this.matchDateTime = new Date();
        this.matchHistory = new MatchHistory();
        this.playerOne = new Player("PlayerOne");   
        this.playerTwo = new Player("PlayerTwo");
    }

    public awardPoint(playerNumber: PlayerNumber): number {       

        let scoringPlayer : Player = this.get_player(playerNumber);

        this.matchHistory.logPoint(new Point(scoringPlayer));
        this.checkWinConditions();
        return scoringPlayer.incrementScore();  

    }

    public subtractPoint(playerNumber: PlayerNumber): number {       

        let scoringPlayer: Player = this.get_player(playerNumber);

        this.matchHistory.logPoint(new Point(scoringPlayer, true));
        this.checkWinConditions();
        return scoringPlayer.decrementScore();  

    }

    private get_player(playerNumber : PlayerNumber) : Player {

        let thePlayer: Player;

        if (playerNumber === PlayerNumber.One) {
            thePlayer = this.playerOne;
        }
        if (playerNumber === PlayerNumber.Two) {
            thePlayer = this.playerTwo
        }

        return thePlayer;

    }

    private checkWinConditions(): boolean {

        let haveWinner: Player = WinConditions.player21Win(this.playerOne, this.playerTwo);

        if (haveWinner) {
            alert('we have a winner');
            return true;
        }
        else {
            return false;
        }
        

    }

    

}

export = Match;

