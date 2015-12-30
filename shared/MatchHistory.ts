import Player = require('./Player');
import Point = require('./Point');

class MatchHistory {

    private points: Array<Point>;
    
    constructor() {
        this.points = new Array<Point>();
        
        
    }

    logPoint(point: Point) {
        this.points.push(point);
    }


}

export = MatchHistory;