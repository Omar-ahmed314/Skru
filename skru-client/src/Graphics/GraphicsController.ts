import Player from "@/Player/Player";

export default interface GraphicsEngine {
    // some functions to draw the game
    getInstance(): any;
    // Todo: add more function to support the game operations
    addPlayer(player: Player): void;
}
