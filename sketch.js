var ground , ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ball.addImage(packageIMG);
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	side1 = createSprite(380,650,200,20);
	side1.shapeColor = "red";
	side2 = createSprite(270,610,20,100);
	side2.shapeColor = "red";
	side3 = createSprite(485,610,20,100);
	side3.shapeColor = "red";

	
	ball =createSprite(30,750,10,10);
	//ball.scale=0.2

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ball = Bodies.circle(width/2 + 5 , 200 , 5, {restitution:.5, isStatic:true});
	World.add(world, ball);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   ball.x= ball.position.x 
   ball.y= ball.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
   ball.velocityX = 3;
   ball.velocityY = 2;
   restitutuion = 0.8;
    }
}
