import Phaser from "phaser";

export default class Coin extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "coin");
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this);
    // Add to physics engine
    scene.physics.add.existing(this, true);
  }
  update() {}
  collect() {
    this.destroy();
  }
  destroy() {
    super.destroy();
  }
}
