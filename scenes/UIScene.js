import Phaser from "phaser";
import { Scene } from "phaser";

// Image imports

export default class UIScene extends Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let sceneWidth = this.cameras.main.width;
    let sceneHeight = this.cameras.main.width;

    // Create menu button
    let menuButton = this.add
      .text(5, 5, "MENU", {
        fontSize: "1rem",
        fontWeight: "bold"
      })
      .setOrigin(0, 0) // Make position based on top right corner
      .setInteractive()
      .on("pointerdown", () => {
        uiMenuContainer.setVisible(!uiMenuContainer.visible);
      });

    let uiMenuContainer = this.add
      .container(menuButton.x + 5, menuButton.y + menuButton.height + 5)
      .setVisible(false);

    // Create RESTART menu item
    uiMenuContainer.add(
      this.add
        .text(0, 0, "RESTART")
        .setInteractive()
        .on("pointerdown", () => {
          // Stop all running scenes
          let sceneManager = this.scene.manager;
          sceneManager.getScenes().forEach(function(scene) {
            let sceneKey = scene.scene.key;
            scene.scene.stop(sceneKey);
          });
          sceneManager.start("TitleScene");
        })
        .setOrigin(0, 0)
    );

    // Create CREDITS menu item
    uiMenuContainer.add(
      this.add
        .text(0, 25, "CREDITS")
        .setInteractive()
        .on("pointerdown", () => {
          this.scene.launch("CreditsScene");
          this.scene.get("CreditsScene").scene.bringToTop();
        })
        .setOrigin(0, 0)
    );
  }

  // This keeps the UI scene stuck in front of other scenes
  // and images, no matter when it's started/launched
  update(time, delta) {
    if (parseInt(time) % 20 === 0) {
      this.scene.bringToTop();
    }
  }
}
