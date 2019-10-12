let bat;
let cat;
let ghost;
let pumpkin;
let witch;
let bckgrd;
var restartl;
var restartr;
var x = 0;
var x2 = 1920;
var y = 100;
var y2 = 690;
var y3 = 700;
var y4= 850;

//code used from forthewall.js//
function preload(){
  bckgrd= loadImage('Background.jpg');
}

function setup() {
  createCanvas(1920, 1080);
  bat = createImg('bat.gif');
  cat = createImg('cat.gif');
  ghost = createImg('GhostL.gif');
  pumpkin = createImg('pumpkin.gif');
  witch = createImg('witchr.gif');
}

function draw() {
  background(bckgrd); 
  bat.position(x,y);
  ghost.position(x2,y2);
  cat.position(x,y3);
  pumpkin.position(850,520);
  witch.position(x,y4);
  
  if(x>width){
		restartl=true}
	else if (x<=0){
		restartl=false}
	
	if (x>=0 && restartl == false){
		x=x+4}
	else if(restartl == true){
		x=0}
  if(x2 == 0){
		restartr=true}
	else if (x2<=width){
		restartr=false}
	
	if (x2<=width && restartr == false){
		x2=x2-4}
	else if(restartr == true){
		x2=1920}
  
}
