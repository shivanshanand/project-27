
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new ball(660,300,40);
	ball5=new ball(500,300,40);
	ball3=new ball(580,300,40);
	ball4=new ball(620,300,40);
	ball2=new ball(540,300,40);
	wall1=new wall(580,50,200,20);
	
	rope1=new rope(ball5.body,wall1.body,-80,0)
	rope2=new rope(ball1.body,wall1.body,80,0)
	rope3=new rope(ball4.body,wall1.body,40,0)
	rope4=new rope(ball3.body,wall1.body,0,0)
	rope5=new rope(ball2.body,wall1.body,-40,0)
}

function draw() {
  background(140);
  Engine.update(engine);

  wall1.show();
  ball1.display();
  fill("blue")
  ball2.display();
  fill("white")
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-50,y:-45});
	}
}                                                           