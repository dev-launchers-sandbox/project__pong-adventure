import Phaser from "phaser";

export default class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "character", 0);
    this.scene = scene;

    // Add this to the scene as a Phaser game object
    scene.add.existing(this);
    // Create the physics-based sprite that we will move around and animate

    /*anims.create({
      key: "johnny-walk",
      frames: anims.generateFrameNumbers("johnny", { start: 5, end: 7 }),
      frameRate: 12,
      repeat: -1
    });*/
    const anims = scene.anims;
    anims.create({
      key: "pong-man",
      frames: anims.generateFrameNumbers("pong", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });

    this.sprite = scene.physics.add
      .existing(this)
      // .sprite(x, y, "player", 0)
      .setDrag(250, 0)
      .setMaxVelocity(200, 400)
      .setCollideWorldBounds(true);

    // Create the animations we need from the player spritesheet
    this.sprite
      // .existing(this)
      .setDrag(0, 0)
      .setMaxVelocity(350, 350)
      .setBounce(3.2, 1);

    const { LEFT, RIGHT, UP, Q, O, P, A } = Phaser.Input.Keyboard.KeyCodes;
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      q: Q,
      o: O,
      p: P,
      a: A
    });
    // this.sprite = scene.physics.add
    //   .sprite(x, y, "player", 0)
    //   .setDrag(500, 0)
    //   .setMaxVelocity(200, 1);

    // Hook into scene's update function
    scene.events.on("update", this.update, this);
  }

  /*
   * moveTowards
   * this fucntion will allow for any character
   * to move towards the targetX and targetY position
   */
  moveTowards(targetX, targetY) {
    if (this.x > targetX) {
      this.x -= 1;
    } else if (this.x < targetX) {
      this.x += 1;
    } else if (this.x !== targetX) {
      this.x -= 1;
    }
    if (this.y > targetY) {
      this.y -= 1;
    } else if (this.y < targetY) {
      this.y += 1;
    }
  }

  update() {
    const keys = this.keys;
    const sprite = this.sprite;
    const onGround = sprite.body.blocked.down;
    const acceleration = onGround ? 600 : 200;

    sprite.anims.play("pong-man", true);

    // Apply horizontal acceleration when left/a or right/d are applied
    if (keys.left.isDown || keys.o.isDown) {
      sprite.setAccelerationX(-acceleration);
      sprite.setFlipX(true);
    } else if (keys.right.isDown || keys.p.isDown) {
      sprite.setAccelerationX(acceleration);
      sprite.setFlipX(false);
    } else {
      sprite.setAccelerationX(0);
    }

    // Only allow the player to jump if they are on the ground
    if (onGround && (keys.up.isDown || keys.q.isDown)) {
      sprite.setVelocityY(-5000 * 2);
    }

    // Update the animation/texture based on the state of the player

    // if (onGround) {
    //   if (sprite.body.velocity.x !== 0) {
    //     sprite.anims.play("pong", true);
    //   } else {
    //     sprite.anims.play("pong", true);
    //   }
    // } else {
    //   sprite.anims.stop();
    //   sprite.setTexture("pong", 4);
    // }
  }
}
