import { Scene } from "phaser";
import { EventBus } from "../EventBus";

export class Game extends Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.setPath("assets");
        this.load.image("background", "bg.jpg");
        this.load.image("card", "cards/1.jpg");
    }

    create() {
        this.add.image(512, 384, "background").setScale(2);
    }
}

