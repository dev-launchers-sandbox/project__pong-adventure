import Phaser from "phaser";
import Ball from "../classes/Ball.js";
import Door from "../classes/Door.js";
export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  preload() {
    alert("preload of PlayScene");
  }

  create() {
    alert("play scene create");
    console.log("playscene");
    const camera = this.cameras.main;
    //camera.setBounds(0, 0, this.game.config.width, this.game.config.height);
    //camera.setViewport(0, 0, 200, 100);

    this.ball = new Ball(this, 100, 100);
    this.ball.setCollideWorldBounds(true);
    this.door = new Door(this, 480, 300);
    this.door.setCollideWorldBounds(true);
    this.backgroundImage = this.add.image();
    //this.ball.setCollideWorldBounds(true);

    // Left paddle
    //this.leftPaddle = new Paddle(this, 30, this.game.config.height / 2, 20, 80);
    //this.physics.add.collider(this.ball, this.leftPaddle);
    //console.log(camera);
    camera.startFollow(this.ball);
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
  generateRectangleSprite(width, height) {
    // Returns key of generated sprite object
    let spriteKey = "rectangle-sprite-" + width + "x" + height;

    var graphics = this.add
      .graphics()
      .fillStyle(0x0000ff)
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
  update(time, delta) {
    this.ball.update(time, delta);
    this.leftPaddle.update(time, delta);
    this.rightPaddle.update(time, delta);
  }

  */
  //
  //
}
