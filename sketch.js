const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg,bg1,p,snow1,snow2,snow3,snow4,repeat,repeat1,snowyday,snowyday1;

function preload(){
  bg=loadImage("snow2.jpg");
  bg1=loadImage("snow1.jpg");
  repeat1=loadImage("repeat.png");
  snowyday1=loadImage("snowy-day (2).jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   
  snow1= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
  snow2= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
  snow3= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
  snow4= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
  snow5= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
  snow6= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);

  repeat=createSprite(750,75,40,40);
  repeat.addImage(repeat1);
  repeat.scale=0.065
 
  //snowyday=createSprite(170,200,10,10);
  //snowyday.addImage(snowyday1);
 // snowyday.scale=0.25
}

function draw() {
  background(bg );
  Engine.update(engine);  
 

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();

   mousePressed();
  drawSprites();

  textSize(20);
  fill (255)
  text ("Click on the Repeat Button to Enjoy the Snowfall Again",120,50);
}

function mousePressed(){
  if(mousePressedOver(repeat)){
    snow1= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
    snow2= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
    snow3= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
    snow4= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
    snow5= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
    snow6= new Snow (Math.round(random(0,800)),Math.round(random(-10,0)),40);
  }
}
