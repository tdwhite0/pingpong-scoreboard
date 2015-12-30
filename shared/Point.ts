import Player = require("./Player");

    class Point {

        private _pointWinner: string;
        private isRemoval: boolean;

        constructor(pointWinner: Player, isRemoval?: boolean) {

            this.pointWinner = pointWinner;
            this.isRemoval = isRemoval;
        }

        set pointWinner(pointWinner : Player) {

            this._pointWinner = pointWinner.name;

        }
       


}

export = Point;

