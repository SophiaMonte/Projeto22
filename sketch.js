const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, basej;
var baseimage, backgroundImg, playerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options ={
    isStatic: true
  };
  //criar corpo da base do jogador
  basej = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, basej);
  //criar corpo do jogador
  jogador = Bodies.rectangle(250, basej.position.y - 160, 50, 180, options);
  World.add(world, jogador);


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(baseimage, basej.position.x, basej.position.y, 180, 150);

  //exibir a imagem da base do jogador usando a função image()
  image(playerimage, jogador.position.x, jogador.position.y, 50, 180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
