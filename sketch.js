
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine,world,dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	boxPosition=width/2-100
	 boxY=610;
	 
	 dustbin = new Dustbin(720,400,100,10);
	 paper = new Paper(200,450,50);
	 ground = new Ground(700,690,2400,15);

	 boxPosition=width/2+150
 	 boxY=640;


 	    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	    boxleftSprite.shapeColor=color("white");

        boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	    World.add(world, boxLeftBody);

 	    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	    boxBase.shapeColor=color("white");

 	    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	    World.add(world, boxBottomBody);

 	    boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	    boxleftSprite.shapeColor=color("white");

 	    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	    World.add(world, boxRightBody);

}


function draw()
 {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  dustbin.display();
  paper.display();
  ground.display();
 }

function keyPressed() 
	{
		if (keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(paper.body,paper.body.position,{x : 130,y : -350});
		}
	}


