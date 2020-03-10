import { Scene } from "phaser";

export default class LoadingScene extends Scene {
  constructor() {
    super("LoadingScene");
  }

  nextScene() {
    this.scene.start("TitleScene");
  }

  preload() {
    // Actual loading follows

    this.load.image("pongthumbnail", "./assets/pongthumbnail.png");

    this.load.image("error-background", "./assets/Better Error page.png");
    this.load.image("world-background", "./assets/background.png");
    this.load.image("coin", "./assets/coin-pixilart.png");
    this.load.spritesheet("pong", "./assets/Better Pong character.png", {
      frameWidth: 32,
      frameHeight: 32,
      margin: 0,
      spacing: 0
    });
  }

  // The rest of this file makes the visual loading bar work!

  init() {
    // Loading bar code
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let barWidth = this.cameras.main.width - 24;
    let barHeight = 25;

    this.add
      .text(centerX, centerY - 48, "Loading", {
        fontSize: "2rem",
        fontWeight: "bold"
      })
      .setOrigin(0.5, 0.5);

    var progressBox = this.add.rectangle(
      centerX,
      centerY,
      barWidth,
      barHeight,
      0x000000
    );
    var progressBar = this.add
      .rectangle(
        progressBox.x - parseInt(progressBox.width / 2),
        centerY,
        barWidth,
        barHeight,
        0xffffff
      )
      .setOrigin(0, 0.5)
      .setScale(0, 1);

    this.load.on("progress", value => {
      console.log(value);
      progressBar.setScale(value, 1);
      if (value == 1) {
        // Loading is complete
        setTimeout(() => {
          this.nextScene();
          this.loadingProgressComplete = true;
        }, 2000);
      }
    });
    ////////////////////////////////////////
  }
}
