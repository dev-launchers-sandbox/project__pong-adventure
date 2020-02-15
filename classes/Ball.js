import Phaser from "phaser";

export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, scene.generateSquareSprite(20));
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this);
    // Add to physics engine
    scene.physics.add.existing(this);

    this.setDrag(0, 0)
      .setMaxVelocity(350, 350)
      .setBounce(3.2, 1);

    this.setVelocity(350, 350);
  }

  update() {}

  destroy() {
    super.destroy();
  }
}
