import Phaser from "phaser";

export default class Button extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, scene.generateSquareSprite(20));
    this.scene = scene;

    scene.add
      .existing(this)
      .setInteractive()
      .setOrigin() // fixes interactive offset issue
      .on("pointerdown", (pointer, localX, localY, event) => {
        // When this chest is clicked, let's do something!
        this.buttonClicked();
      });
  }
  //need a button
  //need to add event listener to button

  buttonClicked() {
    alert("buttonclicked of button");
  }

  destroy() {
    super.destroy();
  }
}
