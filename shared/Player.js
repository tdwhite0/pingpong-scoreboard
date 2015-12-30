var Player = (function () {
    function Player(name) {
        this.score = 0;
        this.isWinner = false;
        this.name = name;
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
module.exports = Player;
//# sourceMappingURL=Player.js.map