import GraphicsEngine from "@/Graphics/GraphicsController";
import NetworkController from "@/Network/NetworkController";
import { GameMode, GameState } from "@/GameEngine/Utils";
import Player from "@/Player/Player";
import Card from "@/Card/Card";

export default class GameEngine {
    // game engine instance
    private graphicsEngine: GraphicsEngine;
    private networkController: NetworkController;
    private gameState: GameState;
    private gameMode: GameMode;
    private players: Player[] = [];
    private hiddenCard: Card;
    private visibleCard: Card;

    constructor() {
        // init a player and add it to the game and graphics engine
    }

    setGraphicsEngine(graphicsEngine: GraphicsEngine) {
        this.graphicsEngine = graphicsEngine;
        return this;
    }

    setNetworkEngine(networkController: NetworkController) {
        // set the network engine to the game engine
        this.networkController = networkController;
        return this;
    }

    addPlayer(player: Player[]) {
        // add a player to the game engine
        // this.players.push(player);

        // send the player to graphics engine for rendering
        this.graphicsEngine.addPlayer(player);
    }
}
