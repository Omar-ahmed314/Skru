import GraphicsEngine from "./GraphicsController";
import { Events } from "phaser";
import { Game as MainGame } from "@/game/scenes/Game";
import Phaser, { AUTO, Game, Types } from "phaser";
import Player from "@/Player/Player";
import { EventBus } from "@/game/EventBus";
import Card from "@/Card/Card";
import React from "react";

export default class PhaserEngine implements GraphicsEngine {
    // phaser game engine logic
    private gameInstance: Phaser.Game;
    private currentGameScene: Phaser.Scene;
    private EventBus: Events.EventEmitter;
    private parent: string;
    private playerList: Player[] = [];

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

    addPlayer(player: Player): void {
        // add a player to the game board
        let container = this.currentGameScene.add.container(400, 600);
        console.log("welcome to the player group: ", container);
        let i = 0;
        let j = -50;
        let gap = 10;
        for (let card of player.hand) {
            let playerCard = this.currentGameScene.add
                .sprite(i, j, "card")
                .setDisplaySize(50, 100)
                .setInteractive();

            i += gap + 50;
            container.add(playerCard);
        }
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
