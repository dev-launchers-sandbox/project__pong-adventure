import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("TitleScene");
  }

  actionOnClick() {}

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
        //alert("startgame");
        this.scene.start("PongIntroScene");
        this.scene.launch("UIScene");
      });
  }
}
