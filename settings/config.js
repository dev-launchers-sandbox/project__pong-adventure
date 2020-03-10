import Phaser from "phaser";
import LoadingScene from "/scenes/LoadingScene.js";
import UIScene from "/scenes/UIScene.js";
import CreditsScene from "/scenes/CreditsScene.js";
import TitleScene from "/scenes/TitleScene.js";
import PongIntroScene from "/scenes/PongIntroScene.js";
import PlayScene from "/scenes/PlayScene.js";
import IntroFightScene from "/scenes/IntroFightScene.js";

export const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 300,
  parent: "game-container",
  pixelArt: true,
  zoom: 0.75,
  backgroundColor: "#996633",
  scene: [
    LoadingScene,
    CreditsScene,
    UIScene,
    TitleScene,
    PongIntroScene,
    PlayScene,
    IntroFightScene
  ],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 10 }
    }
  }
};
