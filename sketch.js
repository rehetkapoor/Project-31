const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g
var particles=[]
var plinkos=[]
var div1,div2,div3,div4,div5,div6,div7

function setup() {
  createCanvas(480,800);
  engine= Engine.create();
  world = engine.world;
  g = new Ground(240, 790, 480, 20);
  div1 = new Division(0, 630, 10, 300);
  div2 = new Division(80, 630, 10, 300);
  div3 = new Division(160,630, 10, 300);
  div4 = new Division(240, 630, 10, 300);
  div5 = new Division(320, 630, 10, 300);
  div6 = new Division(400, 630, 10, 300);
  div7 = new Division(480, 630, 10, 300);

  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine)
  if(frameCount%90===0){
    particles.push(new Particle(random(40, 460), 0));
  }
  g.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i=0; i<particles.length; i++){
  particles[i].display();
}
  drawSprites();
}