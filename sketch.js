const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

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

  //criar corpo da base do jogador
function setup(){
  canvas=creatCanvas(windowwidth,windowHeigh);

  engine = Engine.create();
  angleMode(DEGREES);
  var opitions ={
    isStatic : true
  };
  playerBase = Bodies.retangle(200,350,180,150,opitions);
  world.add(world,player);
  player = Bodies.retangle(250,playerBase.position.y-160,50,180,opitions);
  world.add(world,player)
}
  //criar corpo do jogador



}

function draw() {
  background(backgroundImg);
background(backgroundImg);
  engine.update(engine);
  image(baseimage,playerBase.posion.x.playerBase.position.y,180,150)
  //exibir a imagem do jogador usando a função image()
image(playerimage,player.position.x,player.position.y,50,180)
  //exibir a imagem da base do jogador usando a função image()
function preload {
  backgroundImg= loadImage("https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Filha-voadora-com-ch%25C3%25A3o-e-grama-isolados-em-fundo-branco-detalhados-no-estilo-de-desenho-animado-ativos-do-jogo-ui-para-o-elemento-217973855.jpg&tbnid=VoWf_gw50zUXdM&vet=12ahUKEwj1k7WDjLCAAxXLCbkGHaRdBPoQMygXegUIARCJAg..i&imgrefurl=https%3A%2F%2Fpt.dreamstime.com%2Filha-voadora-com-ch%25C3%25A3o-e-grama-isolados-em-fundo-branco-detalhados-no-estilo-de-desenho-animado-ativos-do-jogo-ui-para-o-elemento-image217973855&docid=JgPHUQjHqq5COM&w=1600&h=1690&q=chao%20voando%20desenho&ved=2ahUKEwj1k7WDjLCAAxXLCbkGHaRdBPoQMygXegUIARCJAg")

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
