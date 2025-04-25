import Card from "../Card/Card";

class Player {
    id: string;
    name: string;
    hand: Card[];
    score: number;
    isTurn: boolean;
    isReady: boolean;
    isHost: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.hand = [];
        this.score = 0;
        this.isTurn = false;
        this.isReady = false;
        this.isHost = false;
    }

    addCard(card: Card) {
        this.hand.push(card);
    }

    removeCard(card: Card) {
        const index = this.hand.indexOf(card);
        if (index > -1) {
            this.hand.splice(index, 1);
        }
    }
}
