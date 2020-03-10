import Phaser from "phaser";
import Door from "../classes/Door.js";
import Character from "../classes/Character.js";
import Coin from "../classes/Coin.js";
export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    console.log("playscene");

    const camera = this.cameras.main;

    this.backgroundImage = this.add.image(250, 150, "error-background");
    this.physics.world.gravity = new Phaser.Math.Vector2(0, 200);

    // Create our character
    this.character = new Character(this, 50, 100);

    // Create door and make it interactive
    this.door = new Door(this, 480, 300);
    this.door.setCollideWorldBounds(true);
    // Set up player and door collision
    this.physics.add.collider([this.door], this.character, () => {
      console.log("door has interactide with character ");
      this.door.destroy(); // So the player only collides once!
      this.scene.manager.start("IntroFightScene");
    });

    // Doing coin stuff here!
    this.coin1 = new Coin(this, 150, 150);
    this.coin2 = new Coin(this, 250, 150);
    this.coin3 = new Coin(this, 350, 150);
    this.physics.add.overlap([this.coin1], this.character, () => {
      this.coin1.collect();
    });
    this.physics.add.overlap([this.coin2], this.character, () => {
      this.coin2.collect();
    });
    this.physics.add.overlap([this.coin3], this.character, () => {
      this.coin3.collect();
    });

    camera.startFollow(this.character);
    camera.setBounds(0, 0, this.game.config.width, this.game.config.height);
    console.log("created scene");
  }
  generateRectangleSprite(width, height, color) {
    // Returns key of generated sprite object
    let spriteKey = "rectangle-sprite-" + width + "x" + height;

    var graphics = this.add
      .graphics()
      .fillStyle(color)
      .fillRect(0, 0, width, height)
      .generateTexture(spriteKey, width, height);
    graphics.destroy();

    return spriteKey;
  }
  generateSquareSprite(width) {
    // Returns key of generated sprite object
    return this.generateRectangleSprite(width, width);
  }
  /*
  // update(time, delta) {
  //   this.ball.update(time, delta);
  //   this.leftPaddle.update(time, delta);
  //   this.rightPaddle.update(time, delta);
  // }

  */
  //
  //
}
