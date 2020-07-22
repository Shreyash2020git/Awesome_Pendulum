const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var bob1; 
 var ground1;
var shot;
var ground2; 
var ground3;
var ground4;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  bob1 = new BobClass(400,400,80,80,90);
ground1 = new Ground(400,500,800,25);
ground2 = new Ground(400,100,300,20);
ground3 = new Ground(200,300,30,200);
ground4 = new Ground(600,300,30,200);
shot = new Slingshota(bob1.body,{x:400,y:100})
}

function draw() {
  Engine.update(engine);
  background(255);  
  bob1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  shot.display();
  
}
function mouseDragged()
{
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingshot.fly();
}