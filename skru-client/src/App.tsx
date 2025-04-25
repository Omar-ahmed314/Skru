import StartGame from "./game/main";
import GameEngine from "./GameEngine/GameEngine";
import PhaserEngine from "./Graphics/PhaserEngine";

function App() {
    // create the game engine has the that controls the whole game

    //  References to the PhaserGame component (game and scene are exposed)
    // const phaserRef = useRef<IRefPhaserGame | null>(null);
    const gameEngine = new GameEngine().setGraphicsEngine(new PhaserEngine());

    // const addSprite = () => {
    //     if (phaserRef.current) {
    //         const scene = phaserRef.current.scene;

    //         if (scene) {
    //             // Add a new sprite to the current scene at a random position
    //             const x = Phaser.Math.Between(64, scene.scale.width - 64);
    //             const y = Phaser.Math.Between(64, scene.scale.height - 64);

    //             //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
    //             scene.add.sprite(x, y, "star");
    //         }
    //     }
    // };

    // this function has to expose the events to the parent component

    return (
        <div id="app">
            <div id="game-container"></div>
        </div>
    );
}

export default App;

