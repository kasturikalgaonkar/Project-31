const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var thunder1, thunder2, thunder3, thunder4;
var stars;
var drops = [];
var maxDrop = 100;


function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(600,800);
    var umbrella = new Umbrella (200,450);

    if(frameCount%150===0){
        for(var i = 0; i< maxDrop; i++){
        drops.push(new Drops(random(0,500),random(0,500)));
    } 
} 
}

function draw(){
    Engine.update(engine);
    background("black");

    rand = Math.round(random(1.4))
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1)
                    break;
            case 2: thunder.addImage(thunder2)
                    break;
            case 3: thunder.addImage(thunder3)
                    break;
            case 4: thunder.addImage(thunder4)
                    break;
            default : break;
        }
        thunder.scale = random(0.2, 0.6);
    }


    if (thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for (var i = 0; i<maxDrops ; i++){
        drops[i].displayDrops();
        drops[i].update();
    }

    drawSprites();
    
    
}   

