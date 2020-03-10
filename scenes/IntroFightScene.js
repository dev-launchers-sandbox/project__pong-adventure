import Phaser from "phaser";
import Door from "../classes/Door.js";
import Character from "../classes/Character.js";
import Coin from "../classes/Coin.js";
export default class IntroFightScene extends Phaser.Scene {
  constructor() {
    super("IntroFightScene");
  }

  create() {
    alert("FIGHT!");
    console.log("IntroFightScene");

    const camera = this.cameras.main;

    this.backgroundImage = this.add.image(250, 150, "world-background");
    this.physics.world.gravity = new Phaser.Math.Vector2(0, 200);

    // Create character
    this.character = new Character(this, 50, 100);

    // Create door and make it interactive
    /*
    this.door = new Door(this, 480, 300);
    this.door.setCollideWorldBounds(true);
    this.physics.add.collider([this.door], this.character, () => {
      console.log("door has interactide with character ");
    });
    */

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

    //this.ball.setCollideWorldBounds(true);

    // Left paddle
    //this.leftPaddle = new Paddle(this, 30, this.game.config.height / 2, 20, 80);
    //this.physics.add.collider(this.ball, this.leftPaddle);
    //console.log(camera);
    camera.startFollow(this.character);
    camera.setBounds(0, 0, this.game.config.width, this.game.config.height);
    console.log("created scene");
    // Right paddle
    //this.rightPaddle = new Paddle(
    //  this,
    //  this.game.config.width - 30,
    //  this.game.config.height / 2,
    //  20,
    //  80
    //);
    //this.physics.add.collider(this.ball, this.rightPaddle);

    /*
    this.add
  c    .text(0, 0, "Arrow keys to move paddles!", {
        font: "32px monospace",
        fill: "#ffffff",
        padding: { x: 1, y: 1 },
        backgroundColor: "#000000"
      })
      .setScrollFactor(0);
      

    let rightSideRect = this.addPhysicalRectangle(495, 150, 10, 300, 1, 0);
    this.physics.add.collider(rightSideRect, this.ball, this.rightSideHit);

    let leftSideRect = this.addPhysicalRectangle(5, 150, 10, 300, 1, 0);
    this.physics.add.collider(leftSideRect, this.ball, this.leftSideHit);
  */
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
