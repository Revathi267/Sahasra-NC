
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var background1;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	var bobDiameter = 50;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bob1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter,posY, bobDiameter);
	bob3 = new Bob(posX,posY,bobDiameter);
	bob4 = new Bob(posX +  bobDiameter, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter * 2, posY, bobDiameter);

	roof = new Roof(width/2, height/4, 350, 15);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0); 
 	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  Engine.update(engine);
  //display roof
  roof.display();

  //display ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //display bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW)
	 {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-50})
	}

	
}

function drawLine(constraint) { 
	bobPosition = constraint.bodyA.position 
	roofPosition = constraint.bodyB.position 
	roofBodyOffset = constraint.pointB; 
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); 
}