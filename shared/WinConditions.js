define(["require", "exports"], function (require, exports) {
    //let player21Win: WinCondition;
    var player21Win = function (playerOne, playerTwo) {
        if (playerOne.score === 21 && playerTwo.score < 21) {
            return playerOne;
        }
        else {
            return null;
        }
    };
    exports.player21Win = player21Win;
});
//# sourceMappingURL=WinConditions.js.map