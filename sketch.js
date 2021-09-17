const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var blower, blowermouth, ball, button

function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world

  blower = new Blower(400,350,100,100)
  blowermouth = new Blowermouth(250,375,200,20) 
  ball = new Ball(400,0,20,20)

  button = createButton("Click to Blow")
  button.position(width/2, height - 100);
  button.mousePressed(blow)


  Engine.run(engine)

}

function draw() {
  background("#2b2d2f");  
  blower.display()
  blowermouth.display()
  ball.display()

}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.01})
}