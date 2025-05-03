import StartGame from "./game/main";
import GameEngine from "./GameEngine/GameEngine";
import Player from "./Player/Player";
import Card from "./Card/Card";
import CardOne from "./Card/CardOne";
import { useEffect, useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "@/game/PhaserGame";
import { Game } from "phaser";
import PhaserEngine from "./Graphics/PhaserEngine";

function App() {
    // create the game engine has the that controls the whole game
    const gameEngine = useRef<GameEngine | null>(null);
    const phaserEngine = useRef<PhaserEngine | null>(null);

    useEffect(() => {
        phaserEngine.current = new PhaserEngine();
        gameEngine.current = new GameEngine();
        gameEngine.current.setGraphicsEngine(phaserEngine.current);
    }, []);

    const addPlayer = () => {
        if (gameEngine.current) {
            let playerList = [];
            const player_1 = new Player();
            player_1.id = "1";
            player_1.addCard(new CardOne());
            player_1.addCard(new CardOne());
            player_1.addCard(new CardOne());
            player_1.addCard(new CardOne());
            const player_2 = new Player();
            player_2.id = "2";
            player_2.addCard(new CardOne());
            player_2.addCard(new CardOne());
            player_2.addCard(new CardOne());
            player_2.addCard(new CardOne());
            const player_3 = new Player();
            player_3.id = "3";
            player_3.addCard(new CardOne());
            player_3.addCard(new CardOne());
            player_3.addCard(new CardOne());
            player_3.addCard(new CardOne());
            const player_4 = new Player();
            player_4.id = "4";
            player_4.addCard(new CardOne());
            player_4.addCard(new CardOne());
            player_4.addCard(new CardOne());
            player_4.addCard(new CardOne());
            // const player_5 = new Player();
            // player_5.id = "5";
            // player_5.addCard(new CardOne());
            // player_5.addCard(new CardOne());
            // player_5.addCard(new CardOne());
            // player_5.addCard(new CardOne());

            gameEngine.current.addPlayer([
                player_1,
                player_2,
                player_3,
                player_4,
                // player_5,
            ]);
        }
    };

    return (
        <div id="app">
            <div id="game-container"></div>
            <button onClick={() => addPlayer()}>Add Player</button>
        </div>
    );
}

export default App;

