import Phaser from "phaser";

import Ball from "./classes/Ball.js";
import Paddle from "./classes/Paddle.js";

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  preload() {}

  create() {
    const camera = this.cameras.main;
    const cursors = this.input.keyboard.createCursorKeys();
    //camera.setBounds(0, 0, this.game.config.width, this.game.config.height);
    //camera.setViewport(0, 0, 200, 100);

    this.ball = new Ball(this, 100, 100);
    this.ball.setCollideWorldBounds(true);

    // Left paddle
    this.leftPaddle = new Paddle(this, 30, this.game.config.height / 2, 20, 80);
    //this.physics.add.collider(this.ball, this.leftPaddle);
    //console.log(camera);
    camera.startFollow(this.ball);
    camera.setBounds(0, 0, this.game.config.width, this.game.config.height);

    // Right paddle
    this.rightPaddle = new Paddle(
      this,
      this.game.config.width - 30,
      this.game.config.height / 2,
      20,
      80
    );
    //this.physics.add.collider(this.ball, this.rightPaddle);

    this.physics.add.collider([this.leftPaddle], this.ball, this.Lpaddlehit);
    this.physics.add.collider([this.rightPaddle], this.ball, this.Rpaddlehit);

    /*
    this.add
  c    .text(0, 0, "Arrow keys to move paddles!", {
        font: "32px monospace",
        fill: "#ffffff",
        padding: { x: 1, y: 1 },
        backgroundColor: "#000000"
      })
      .setScrollFactor(0);
      */

    let rightSideRect = this.addPhysicalRectangle(495, 150, 10, 300, 1, 0);
    this.physics.add.collider(rightSideRect, this.ball, this.rightSideHit);

    let leftSideRect = this.addPhysicalRectangle(5, 150, 10, 300, 1, 0);
    this.physics.add.collider(leftSideRect, this.ball, this.leftSideHit);
  }

  Lpaddlehit(paddle, ball) {
    console.log("Lpaddlehit");
  }

  Rpaddlehit(paddle, ball) {
    console.log("Rpaddlehit");
  }

  leftSideHit(paddle, ball) {
    alert("leftSideHit");
  }
  rightSideHit(paddle, ball) {
    alert("rightSideHit");
  }
  update(time, delta) {
    this.ball.update(time, delta);
    this.leftPaddle.update(time, delta);
    this.rightPaddle.update(time, delta);
  }

  /* <Begin> helper functions added by Kris */
  //
  //

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

  addPhysicalRectangle(x, y, width, height, color, alphaIThinkMaybe) {
    // TODO: alphaIThinkMaybe name change
    let rect = this.add.rectangle(x, y, width, height, color, alphaIThinkMaybe);
    rect = this.physics.add.existing(rect, true);

    return rect;
  }

  /* </End> Helper functions added by kris */
}

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 300,
  parent: "game-container",
  pixelArt: true,
  zoom: 0.75,
  backgroundColor: "#996633",
  scene: PlayScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  }
};

const game = new Phaser.Game(config);
let controls;
