import Player from "@/Player/Player";
import { JSX } from "react";

export default interface GraphicsEngine {
    // some functions to draw the game
    getInstance(): any;
    // Todo: add more function to support the game operations
    addPlayer(players: Player[]): void;
}
