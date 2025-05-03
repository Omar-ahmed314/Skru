import GraphicsObject from "./GraphicsObject";
import Player from "@/Player/Player";
import ObjectPosition from "./ObjectPosition";

export default class PlayerObject implements GraphicsObject {
    id: string;
    objectPosition: ObjectPosition;
    orientation: number;
    playerContainer: Phaser.GameObjects.Container;
    // player object interface
    constructor(
        player: Player,
        position: ObjectPosition,
        orientation: number,
        gameScene: Phaser.Scene
    ) {
        this.id = player.id;
        this.objectPosition = position;
        this.orientation = 0; // default orientation
        this.playerContainer = gameScene.add
            .container(position.x, position.y)
            .setRotation(orientation);
        let cardsContainer = gameScene.add.container(0, 0);

        let cardWidth = 50;
        let cardHeight = 100;
        let numCards = player.hand.length;
        let gap = 10;
        let totalWidth = numCards * cardWidth + (numCards - 1) * gap;
        let totalHeight = cardHeight; // Adjusted height to include gap

        for (let card of player.hand) {
            let playerCard = gameScene.add
                .sprite(0, 0, "card")
                .setDisplaySize(cardWidth, cardHeight)
                .setInteractive();

            // i += gap + 50;
            cardsContainer.add(playerCard);
        }
        const label = gameScene.add.text(
            0,
            -cardHeight - 10,
            `Player ${player.id}`,
            {
                color: "#000000",
            }
        );
        const bg = gameScene.add.rectangle(
            0,
            0,
            totalWidth + 20,
            cardHeight + 20,
            0x333333,
            0.5
        );
        this.playerContainer.add(label);
        this.playerContainer.add(cardsContainer);
        this.playerContainer.add(bg);
        this.playerContainer.bringToTop(label);
        this.playerContainer.sendToBack(bg); // Move background behind cards

        Phaser.Actions.GridAlign(cardsContainer.getAll(), {
            width: -1,
            height: 1,
            cellWidth: cardWidth + gap,
            cellHeight: cardHeight,
            position: Phaser.Display.Align.CENTER,
            x: -totalWidth / 2 - gap / 2,
            y: -cardHeight / 2,
        });
    }

    getCard(id: string): Phaser.GameObjects.Sprite | null {
        // get the card object by id
        let card = this.playerContainer.getByName(
            id
        ) as Phaser.GameObjects.Sprite;
        if (card) {
            return card;
        } else {
            return null;
        }
    }

    insertCard(card: Phaser.GameObjects.Sprite): void {
        // insert a card to the player object
        this.playerContainer.add(card);
    }
}
