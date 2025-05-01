import GameEngine from "@/GameEngine/GameEngine";
import ActionType from "./ActionType";

export default interface Action {
    actionType: ActionType;
    gameInstance: GameEngine;
    execute(): void;
}
