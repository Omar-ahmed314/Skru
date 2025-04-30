import GraphicsEngine from "./GraphicsController";
import { Events } from "phaser";
import { Game as MainGame } from "@/game/scenes/Game";
import { AUTO, Game, Types } from "phaser";
import Player from "@/Player/Player";
import { EventBus } from "@/game/EventBus";
import Card from "@/Card/Card";

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
    private currentGameScene: Phaser.Scene;
    private EventBus: Events.EventEmitter;
    private parent: string;
    private playerList: Player[] = [];

    constructor() {
        this.parent = "game-container";
        this.gameInstance = new Game({ ...config, parent: this.parent });
        // this.gameInstance.scene.start("Game");
        this.gameInstance.events.once("ready", () => {
            this.currentGameScene = this.gameInstance.scene.getScene("Game");
        });
    }

    private async ensureSceneReady(): Promise<void> {
        if (this.currentGameScene) return;
        await new Promise<void>((resolve) => {
            this.gameInstance.events.once("ready", () => {
                this.currentGameScene =
                    this.gameInstance.scene.getScene("Game");
                resolve();
            });
        });
    }

    async addPlayer(player: Player): Promise<void> {
        await this.ensureSceneReady();
        // add a player to the game board
        const groupConfig = {
            classType: Phaser.GameObjects.Sprite,
            defaultKey: null,
            defaultFrame: null,
            active: true,
            maxSize: 5,
            runChildUpdate: true,
            createCallback: null,
            removeCallback: null,
            createMultipleCallback: null,
        };
        // let group = this.currentGameScene.add
        //     .group(groupConfig)
        //     .setXY(512, 764);
        // console.log("welcome to the player group: ", group);
        let i = 0;
        for (let card of player.hand) {
            let playerCard = this.currentGameScene.add.image(i, i, "card");
            i += 10;
            // group.add(playerCard);
        }
    }

    private initEvents() {}

    private initAttributes() {}

    getInstance() {
        return this.gameInstance;
    }

    setCurrentScene(scene: Phaser.Scene) {
        // set the current scene to the game engine
        this.currentGameScene = scene;
    }
}
