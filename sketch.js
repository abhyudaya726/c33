const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var ground;

var division = [];
var plinko = [];
var partical;

var divheight = 300;

var turns = 0;

var gameState = "play";

var score = 0;

function setup(){
    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,550,400,10);

    for(var i = 0; i<= width ; i+=80){
        division.push(new Division(i,405,10,divheight));
    }
    for(var k = 40; k<=width; k+=50){
        plinko.push(new Plinko(k,75));
    }
    for(var m = 15; m<=width; m+=50){
        plinko.push(new Plinko(m,125));
    }
    for(var o = 40; o<=width; o+=50){
        plinko.push(new Plinko(o,175));
    }
}

function draw(){
    background(51);
    Engine.update(engine);

    ground.display();

    for(var j = 0; j<division.length; j++){
        division[j].display();
    }
    for(var l = 0; l<plinko.length; l++){
        plinko[l].display();
    }
    for(var n = 0; n<plinko.length; n++){
        plinko[n].display();
    }
    for(var p = 0; p<plinko.length; p++){
        plinko[p].display();
    }
    for(var r = 0; r<plinko.length; r++){
        plinko[r].display();
    }


    if(partical){
        partical.display();
    }

    if(turns === 5){
        gameState = "end";
    }
    
    if(gameState === "end"){
        push()
        textSize(50);
        fill(random(0,255),random(0,255),random(0,255));
        text("Game Over",100,150);
        pop();
    }

    text("Turns:"+turns,50,40);
    text("500",30,400);
    text("400",110,400);
    text("300",190,400);
    text("200",270,400);
    text("100",350,400);
    text("Score"+score,340,30);
}

function mousePressed(){

    if(gameState!="end"){
        partical = new Partical(mouseX,10);
        turns++;
    }
    locCheck();
}

function locCheck(){
    var pos = partical.body.position;

    if(pos.y>220){
        if(pos.x>7 && pos.x<73){
            score+=500;
        }
        if(pos.x>89 && pos.x<150){
            score+=400;
        }
        if(pos.x>170 && pos.x<230){
            score+=300;
        }
        if(pos.x>251 && pos.x<301){
            score+=200;
        }
        if(pos.x>330 && pos.x<380){
            score+=100;
        }
    }
}
