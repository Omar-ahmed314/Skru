import GameEngine from "@/GameEngine/GameEngine";
import Card, { CardType } from "./Card";

export default class CardOne implements Card {
    value: number;
    type: CardType;
    background_url: string;
    ground_swappable: boolean;
    visible: boolean;

    apply(gameEngine: GameEngine): void {
        throw new Error("Method not implemented.");
    }
}
