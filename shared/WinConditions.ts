import Player = require('./Player');

interface WinCondition {
    (playerOne: Player, playerTwo: Player): Player;

}

//let player21Win: WinCondition;
let player21Win: WinCondition = (playerOne: Player, playerTwo: Player) : Player => {

    if (playerOne.score === 21 && playerTwo.score < 21) {
        return playerOne;
    }
    else {
        return null;
    }

};

export {
    player21Win
}

