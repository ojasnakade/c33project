const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle=null;
var count=0;
var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  push();
  textSize(20)
  text("Score : "+score,650,30);
  pop();

  push();
  textSize(20)
  text("500",30,530);
  pop();

  push();
  textSize(20)
  text("500",105,530);
  pop();

  push();
  textSize(20)
  text("500",185,530);
  pop();

  push();
  textSize(20)
  text("500",265,530);
  pop();

  push();
  textSize(20)
  text("100",345,530);
  pop();

  push();
  textSize(20)
  text("100",425,530);
  pop();

  push();
  textSize(20)
  text("100",505,530);
  pop();

  push();
  textSize(20)
  text("200",585,530);
  pop();

  push();
  textSize(20)
  text("200",665,530);
  pop();

  push();
  textSize(20)
  text("200",745,530);
  pop();

  Engine.update(engine);

  
  if ( gameState==="end"){
      
    textSize(90);
    text("GameOver", 150, 300);
   
  }
 
  push();
  stroke("red");    
  //text (mouseX+","+mouseY,mouseX,mouseY);
  pop();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    //score++;
  //  }

  ground.display();
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

 
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10);
  }
}