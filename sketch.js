
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(600,600);

    engine = Engine.create();
	world = engine.world;

	//let canvasmouse = Mouse.create(canvas.elt);
	//canvasmouse.pixelRatio = pixelDensity();
	//let options = {mouse : canvasmouse};
	//mConstraint = MouseConstraint.create(engine,options);
	//World.add(world,mConstraint);
	
	//startBobPositionX=width/2; 
	//startBobPositionY=height/4+500; 

	bob1 = new pendulum(180,500);
	bob2 = new pendulum(240,500);
	bob3 = new pendulum(300,500);
	bob4 = new pendulum(360,500);
	bob5 = new pendulum(420,500);

	rope1 = new sling(bob1.body,{x:180, y:height/4})
	rope2 = new sling(bob2.body,{x:240, y:height/4})
    rope3 = new sling(bob3.body,{x:300, y:height/4}) //x=330,y=300
	rope4 = new sling(bob4.body,{x:360, y:height/4})
	rope5 = new sling(bob5.body,{x:420, y:height/4})

    Engine.run(engine);
}

function draw() {
  background(0);

  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}