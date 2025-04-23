import { Scene } from "phaser";
import { EventBus } from "../EventBus";

export class Game extends Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.setPath("assets");
        this.load.image("background", "bg.jpg");
        this.load.image("card", "./cards/1.jpg");
    }

    create() {
        this.add.image(512, 384, "background").setScale(2);
        this.add.image(512, 768, "card");
        this.add.image(520, 768, "card");
        this.add.image(530, 768, "card");
        this.add.image(540, 768, "card");
        // add the card image to the center of the screen as cards deck
        this.add.image(512, 384, "card");

        EventBus.emit("current-scene-ready", this);
    }
}

