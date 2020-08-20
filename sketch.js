
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constrait = Matter.Constrait;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/7,20);
	bob1 = new bob(40,40,7);
    bob2 = new bob(120,120,7);
    bob3 = new bob(200,200,7);
	bob4 = new bob(280,280,7);
	bob5 = new bob(360,360,7);

	string1 = new String(46,46,2,10);
	string2 = new String(126,126,2,10);
	string3 = new String(206,206,2,10);
	string4 = new String(286,286,2,10);
	string5 = new String(366,366,2,10); 

	Engine.run(engine);
  
}

function draw() {
 rectMode(CENTER);
 background(230);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();

 roof.display();

 drawSprites();

}



