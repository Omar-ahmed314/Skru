import GameEngine from "@/GameEngine/GameEngine";

export enum ActionType {
    VISIBLE_CARD_CLICKED,
    HIDDEN_CARD_CLICKED,
    SELF_CARD_CLICKED,
    OPPENENT_CARD_CLICKED,
    EXCHANGE,
    SWAP,
}
export default interface Action {
    actionType: ActionType;
    gameInstance: GameEngine;
    execute(): void;
}
