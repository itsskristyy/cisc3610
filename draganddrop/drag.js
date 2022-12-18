var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 900,
  autoCenter: true,
  backgroundColor: "#ddd",
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("space", "Props/SceneOne/1280.jpg");
  this.load.image("top", "Props/SceneOne/boss_ship.png");
  this.load.image("alien", "Props/SceneOne/boss_shooter.png");
  this.load.image("monkey", "Props/SceneOne/monkey.png");
  this.load.image("rock", "Props/SceneOne/ast.png");
  this.load.image("ck", "Props/SceneOne/las.png");
  this.load.image("ban", "Props/SceneOne/ban.png");
}

function create() {
  this.add.image(400, 300, "space");

  var top = this.add.sprite(100, 850, "top");
  var alien = this.add.sprite(300, 800, "alien");
  var monkey = this.add.sprite(600, 850, "monkey");
  var rock = this.add.sprite(200, 800, "rock");
  var ck = this.add.sprite(170, 830, "ck");
  var ban = this.add.sprite(180, 820, "ban");

  top.setInteractive();
  alien.setInteractive();
  monkey.setInteractive();
  rock.setInteractive();
  ck.setInteractive();
  ban.setInteractive();

  this.input.setDraggable(top);
  this.input.setDraggable(alien);
  this.input.setDraggable(monkey);
  this.input.setDraggable(rock);
  this.input.setDraggable(ck);
  this.input.setDraggable(ban);

  this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });
}