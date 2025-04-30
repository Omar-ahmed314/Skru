import GameEngine from "../GameEngine/GameEngine";

export enum CardType {
    // card types
    MOVE = "MOVE",
    SWAP = "SWAP",
    REVEAL = "REVEAL",
    BLOCK = "BLOCK",
    SKIP = "SKIP",
    JUMP = "JUMP",
    REVERSE = "REVERSE",
    DRAW = "DRAW",
}

export default interface Card {
    value: number;
    type: CardType;
    background_url: string;
    ground_swappable: boolean;
    visible: boolean;
    apply(gameEngine: GameEngine): void;
}
