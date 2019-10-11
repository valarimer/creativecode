let bat;
let cat;
let ghost;
let bckgrd;
var restart;
var x = 0;
var y = 100;
var y2 = 500;
var y3 = 900;
var y4 = 1300;
var y5 = 1400;

//code used from forthewall.js//
function preload(){
  bckgrd= loadImage('Background.jpg');
}

function setup() {
  createCanvas(1920, 1800);
  bat = createImg('bat.gif');
  bat2 = createImg('bat.gif');
  cat = createImg('cat.gif');
  ghost = createImg('ghost.gif');
  ghost2 = createImg('ghost.gif');
}

function draw() {
  background(bckgrd); 
  bat.position(x,y);
  ghost.position(x,y2);
  bat2.position(x,y3);
  ghost2.position(x,y4);
  cat.position(x,y5);
  
  if(x>width){
		restart=true}
	else if (x<=0){
		restart=false}
	
	if (x>=0 && restart == false){
		x=x+1}
	else if(restart == true){
		x=0}
}
