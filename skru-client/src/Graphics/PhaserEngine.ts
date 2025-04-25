import GraphicsEngine from "./GraphicsController";
import { Events } from "phaser";
import { Game as MainGame } from "@/game/scenes/Game";
import { AUTO, Game, Types } from "phaser";
import Player from "@/Player/Player";

const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [MainGame],
};

export default class PhaserEngine implements GraphicsEngine {
    // phaser game engine logic
    private gameInstance: Phaser.Game;
    private EventBus: Events.EventEmitter;
    private parent: string;
    private playerList: Player[] = [];

    constructor() {
        this.initAttributes();
        this.initEvents();
    }

    private initEvents() {}

    private initAttributes() {
        this.parent = "game-container";
        this.gameInstance = new Game({ ...config, parent: this.parent });
        this.EventBus = new Events.EventEmitter();
    }

    getInstance() {
        return this.gameInstance;
    }

    addPlayer(player: Player): void {}
}
