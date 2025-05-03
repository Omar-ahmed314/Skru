import GraphicsEngine from "./GraphicsController";
import { Events } from "phaser";
import Phaser from "phaser";
import Player from "@/Player/Player";
import PlayerObject from "@/Types/PlayerObject";
import ObjectPosition from "@/Types/ObjectPosition";

export default class PhaserEngine implements GraphicsEngine {
    // phaser game engine logic
    private gameInstance: Phaser.Game;
    private currentGameScene: Phaser.Scene;
    private EventBus: Events.EventEmitter;
    private parent: string;
    private playerList: PlayerObject[] = [];

    constructor() {
        this.gameInstance = new Phaser.Game({
            type: Phaser.AUTO,
            parent: "game-container",
            width: 800,
            height: 600,
            backgroundColor: "#028af8",
            scene: {
                preload: this.preload.bind(this),
                create: this.create.bind(this),
            },
        });
    }

    addPlayer(players: Player[]): void {
        let elipsePosition = new Phaser.Geom.Ellipse(400, 300, 800, 600);
        let playersObjects = [];
        let playerListLength = players.length;
        let deltaTheta = (2 * Math.PI) / playerListLength;
        for (let i = 0; i < playerListLength; i++) {
            let playerObject = new PlayerObject(
                players[i],
                { x: 0, y: 0 },
                i * deltaTheta,
                this.currentGameScene
            );
            playersObjects.push(playerObject.playerContainer);
        }
        Phaser.Actions.PlaceOnEllipse(
            playersObjects,
            elipsePosition,
            (-3 * Math.PI) / 2,
            Math.PI / 2
        );
        // this.playerList.push(playerObject);
    }

    private initEvents() {}

    private initAttributes() {}

    private preload() {
        this.currentGameScene = this.gameInstance.scene.scenes[0];
        this.currentGameScene.load.setPath("assets");
        this.currentGameScene.load.image("background", "bg.jpg");
        this.currentGameScene.load.image("card", "cards/1.jpg");
    }

    private create() {
        // nothing to do right now
        this.currentGameScene.add.image(400, 300, "background").setScale(2);
    }

    getInstance() {
        return this.gameInstance;
    }

    setCurrentScene(scene: Phaser.Scene) {
        // set the current scene to the game engine
        this.currentGameScene = scene;
    }
}
