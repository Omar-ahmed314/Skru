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
            const player = new Player();
            player.addCard(new CardOne());
            player.addCard(new CardOne());
            player.addCard(new CardOne());
            player.addCard(new CardOne());

            gameEngine.current.addPlayer(player);
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

