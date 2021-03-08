var helicopterIMG, helicopterSprite, packageSprite,packageIMG,holder1,holder2,holder3;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	holder1Sprite=createSprite(275, 575, 15,150);
	holder1Sprite.shapeColor=color("red")

	holder2Sprite=createSprite(475, 575, 15,150);
	holder2Sprite.shapeColor=color("red")

	holderSprite3=createSprite(375, 645, 175,15);
	holderSprite3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	packageBody=Bodies.rectangle(400,300,50,50, {
	isStatic:true,restitution:1
	});
	World.add(world, packageBody);
	 
	Engine.run(engine);

	//holder.newholder();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic (packageBody,false)
    
  }
}



