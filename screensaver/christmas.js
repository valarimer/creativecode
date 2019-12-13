let elf;
let santa;
let present;
let snowman;
let scarfguy;
let bckgrd;
var restartl;
var restartr;
var x = 0;
var x2 = 600;
var y = 50;
var y2 = 300;
var y3 = 50;
var y4= 235;
//var wall;

//code used from forthewall.js//
function preload(){
  bckgrd= loadImage('background.gif');
}

function setup() {
  createCanvas(700,400);
    elf = createImg('elf.gif');
    santa = createImg('santa.gif');
    present = createImg('present.gif');
    snowman = createImg('snow.gif');
    scarfguy = createImg('scarf.gif');
}

function draw() {
  //this code generates the backgound and elements
  background(bckgrd); 
    elf.position(550,165);
    santa.position(x2,y2);
    present.position(x,y3);
    snowman.position(300,180);
    scarfguy.position(x,y4);
  
  //these if else statements allow the elements to move and restart once they leave the screen
  if(x>650){
		restartl=true}
	else if (x<=0){
		restartl=false}
	
	if (x>=0 && restartl == false){
		x=x+1.05}
	else if(restartl == true){
		x=0}
  if(x2 == 0){
		restartr=true}
	else if (x2<=width){
		restartr=false}
	
	if (x2<=width && restartr == false){
		x2=x2-1}
	else if(restartr == true){
		x2=600}
  
  if(y2 > 0 && restartr == false){
      y2 = y2- .5;
  } else if (restartr == true){
      y2 = 300;
  }
  
}
