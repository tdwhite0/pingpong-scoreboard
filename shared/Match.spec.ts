import Match = require("./Match");
import PlayerNumber = require("./PlayerNumber");

describe("Match test suite", function () {

    it("The match should start with both players at 0 - 0", function () {

        let match = new Match();
        let playerOne = PlayerNumber.One;
        let playerTwo = PlayerNumber.Two;

        let playerOneScore = match.getPlayerScore(playerOne);
        let playerTwoScore = match.getPlayerScore(playerTwo);

        expect(playerOneScore).toEqual(0);
        expect(playerTwoScore).toEqual(0);

        expect(playerOneScore).toEqual(playerTwoScore);
    });



    it("awarding a point should increase the score of the player by one", function () {

        let match = new Match();
        let playerNumber = PlayerNumber.One;

        let playerOneScore = match.getPlayerScore(playerNumber);

        expect(playerOneScore).toEqual(0);

        match.awardPoint(playerNumber);

        expect(match.getPlayerScore(playerNumber)).toEqual(1);

    });

    it("awarding 5 points should increase the score of the player by five", function () {

        let match = new Match();
        let playerNumber = PlayerNumber.One;

        let playerOneScore = match.getPlayerScore(playerNumber);

        expect(playerOneScore).toEqual(0);

        match.awardPoint(PlayerNumber.One);
        match.awardPoint(PlayerNumber.One);
        match.awardPoint(PlayerNumber.One);
        match.awardPoint(PlayerNumber.One);
        match.awardPoint(PlayerNumber.One);

        expect(match.getPlayerScore(playerNumber)).toEqual(5);

    });

  

    
});