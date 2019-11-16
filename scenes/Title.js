import Phaser from "phaser";
import PlayScene from "./PlayScene";
import Introduction from "./Introduction";

export default class Title extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    this.load.image("pongthumbnail", "./assets/pongthumbnail.png");
  }

  create() {
    const camera = this.cameras.main;
    this.backgroundImage = this.add.image(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "pongthumbnail"
    );
    this.backgroundImage
      .setInteractive()
      .on("pointerdown", (pointer, localX, localY, event) => {
        alert("startgame");
        this.scene.start("Introduction");
      });
  }
}
const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 300,
  parent: "game-container",
  pixelArt: true,
  zoom: 0.75,
  backgroundColor: "#996633",
  scene: [Title, PlayScene, Introduction],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  }
};

const game = new Phaser.Game(config);
let controls;
