const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var particles=[];
var plinkos=[];
var division=[];
var divisionsheight=225;



function setup() {
  createCanvas(500,700);
  background(159,122,208);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(400,690,800,20);

  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75));
  }
  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 175));
  }
  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 275));
  }
  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 375));
  }
 
 

  for(var k = 0; k<=width;k = k + 80){
    division.push(new Division(k,height-divisionsheight/2,10,divisionsheight));
  }
 
}

function draw() {

  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }
  Engine.update(engine);
  background("purple");
  ground.display(); 


  for(var i = 0; i < particles.length; i++){
    particles[i].display();
   }
  for(var k = 0; k<division.length;k++) {
    division[k].display();
  }
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }
}
