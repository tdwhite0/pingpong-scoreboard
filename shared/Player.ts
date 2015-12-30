
class Player {

    public score: number = 0;
    public isWinner: boolean = false;
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

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

export = Player;


