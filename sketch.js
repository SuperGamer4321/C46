var musician,musicianImg;
var bg , music1,  music1Img , music2 , music2Img , music3,music3Img , musicNote , musicNoteImg;
var mainbg,form,game,mainbg1;
var gameState = 0;

function preLoad(){
 music1Img = loadImage("music1.png");
 music2Img = loadImage("music2.png");
 music3Img = loadImage("music3.png");
 musician = loadImage("musician.png");
 bg = loadImage("bg.jpg");
 mainbg1 = loadImage("mainbg.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    console.log(windowWidth,windowHeight);
game = new Game();
game.start();
}

function draw(){
background(bg);


drawSprites();
}