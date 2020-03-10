import Phaser from "phaser";
import { Scene } from "phaser";

let CREDITS_STRING = "John P.\nBrenden K.\nIsaac T.";

export default class CreditsScene extends Scene {
  constructor() {
    super("CreditsScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    this.add
      .text(centerX, centerY - 50, "Credits", {
        fontSize: "3rem",
        fontWeight: "bold"
      })
      .setOrigin(0.5, 0.5);

    this.add
      .text(centerX, centerY, CREDITS_STRING, {
        fontSize: "2rem",
        fontWeight: "normal"
      })
      .setOrigin(0.5, 0);

    this.input.on("pointerdown", () => {
      this.scene.manager.stop("CreditsScene");
    });
  }
}
