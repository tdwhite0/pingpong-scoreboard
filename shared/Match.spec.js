define(["require", "exports", "./Match", "./PlayerNumber"], function (require, exports, Match, PlayerNumber) {
    describe("Match test suite", function () {
        it("The match should start with both players at 0 - 0", function () {
            var match = new Match();
            var playerOne = PlayerNumber.One;
            var playerTwo = PlayerNumber.Two;
            var playerOneScore = match.getPlayerScore(playerOne);
            var playerTwoScore = match.getPlayerScore(playerTwo);
            expect(playerOneScore).toEqual(0);
            expect(playerTwoScore).toEqual(0);
            expect(playerOneScore).toEqual(playerTwoScore);
        });
        it("awarding a point should increase the score of the player by one", function () {
            var match = new Match();
            var playerNumber = PlayerNumber.One;
            var playerOneScore = match.getPlayerScore(playerNumber);
            expect(playerOneScore).toEqual(0);
            match.awardPoint(playerNumber);
            expect(match.getPlayerScore(playerNumber)).toEqual(1);
        });
        it("awarding 5 points should increase the score of the player by five", function () {
            var match = new Match();
            var playerNumber = PlayerNumber.One;
            var playerOneScore = match.getPlayerScore(playerNumber);
            expect(playerOneScore).toEqual(0);
            match.awardPoint(PlayerNumber.One);
            match.awardPoint(PlayerNumber.One);
            match.awardPoint(PlayerNumber.One);
            match.awardPoint(PlayerNumber.One);
            match.awardPoint(PlayerNumber.One);
            expect(match.getPlayerScore(playerNumber)).toEqual(5);
        });
    });
});
//# sourceMappingURL=Match.spec.js.map