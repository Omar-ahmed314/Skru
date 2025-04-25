import GraphicsEngine from "@/Graphics/GraphicsController";
import NetworkController from "@/Network/NetworkController";

export default class GameEngine {
    // game engine instance
    private graphicsEngine: GraphicsEngine;
    private networkController: NetworkController;
    constructor() {}

    setGraphicsEngine(graphicsEngine: GraphicsEngine) {
        this.graphicsEngine = graphicsEngine;
        return this;
    }

    setNetworkEngine(networkController: NetworkController) {
        // set the network engine to the game engine
        this.networkController = networkController;
        return this;
    }
}
