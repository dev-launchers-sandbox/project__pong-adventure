import Phaser from "phaser";

export default class Door extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, scene.generateRectangleSprite(30, 40));
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this);
    // Add to physics engine
    scene.physics.add.existing(this);
  }

  update() {}

  destroy() {
    super.destroy();
  }
}
