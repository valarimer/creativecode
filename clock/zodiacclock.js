let sky;
let aries;
let taurus;
let gemini;
let cancer;
let leo;
let virgo;
let libra;
let scorpio;
let sagittarius;
let capricorn;
let aquarius;
let pisces;

function preload(){
  sky= loadImage('stars.jpg');
  aries= loadImage('aries.png');
  taurus= loadImage('taurus.png');
  gemini= loadImage('gemini.png');
  cancer= loadImage('cancer.png');
  leo= loadImage('leo.png');
  virgo= loadImage('virgo.png');
  libra= loadImage('libra.png');
  scorpio= loadImage('scorpio.png');
  sagit= loadImage('sagittarius.png');
  capri= loadImage('capricorn.png');
  aqua= loadImage('aquarius.png');
  pisces= loadImage('pisces.png');
  pluto= loadImage('pluto.png');
  colon= loadImage('colon.png');
}

function printHour(){
  if(hour() == 1 || hour() == 13){
     image(aries,100,540);
  } else if(hour() == 2 || hour() == 14) {
      image(taurus,100,540);
  } else if(hour() == 3 || hour() == 15){
      image(gemini,100,540);
  } else if(hour() == 4 || hour() == 16){
      image(cancer,100,540);
  } else if(hour() == 5 || hour() == 17){
      image(leo,100,540);
  } else if(hour() == 6 || hour() == 18){
      image(virgo,100,540);
  }  else if(hour() == 7 || hour() == 19){
      image(libra,100,540);
  }  else if(hour() == 8 || hour() == 20){
      image(scorpio,100,540);
  }  else if(hour() == 9 || hour() == 21){
      image(sagit,100,540);
  }  else if(hour() == 10 || hour() == 22){
      image(capri,100,540);
  }  else if(hour() == 11 || hour() == 23){
      image(aqua,100,540);
  }  else if(hour() == 12 || hour() == 24){
      image(pisces,100,540);
  }
}

function printMin(){
  if(minute() == 1){
     image(aries,1500,540);
  } else if(minute() ==2) {
      image(taurus,1500,540);
  } else if(minute() ==3){
      image(gemini,1500,540);
  } else if(minute() ==4){
      image(cancer,1500,540);
  } else if(minute() ==5){
      image(leo,1500,540);
  } else if(minute() ==6){
      image(virgo,1500,540);
  }  else if(minute() ==7){
      image(libra,1500,540);
  }  else if(minute() == 8){
      image(scorpio,1500,540);
  }  else if(minute() ==9){
      image(sagit,1500,540);
  }  else if(minute() ==10){
      image(capri,1500,540);
  }  else if(minute() ==11){
      image(aqua,1500,540);
  }  else if(minute() ==12){
      image(pisces,1500,540);
  }  else if(minute() == 13){
      image(aries,1000,540);
      image(gemini,1700,540);
  }  else if(minute() == 14){
      image(aries,1000,540);
      image(cancer,1700,540);
  }  else if(minute() == 15){
      image(aries,1000,540);
      image(leo,1700,540);
  }  else if(minute() == 16){
      image(aries,1000,540);
      image(virgo,1700,540);
  }  else if(minute() == 17){
      image(aries,1000,540);
      image(libra,1700,540);
  }  else if(minute() == 18){
      image(aries,1000,540);
      image(scorpio,1700,540);
  }  else if(minute() == 19){
      image(aries,1000,540);
      image(sagit,1700,540);
  }  else if(minute() == 20){
      image(taurus,1000,540);
      image(pluto,1700,540);
  }  else if(minute() == 21){
      image(taurus,1000,540);
      image(aries,1700,540);
  }  else if(minute() == 22){
      image(taurus,1000,540);
      image(taurus,1700,540);
  }  else if(minute() == 23){
      image(taurus,1000,540);
      image(gemini,1700,540);
  }  else if(minute() == 24){
      image(taurus,1000,540);
      image(cancer,1700,540);
  }  else if(minute() == 25){
      image(taurus,1000,540);
      image(leo,1700,540);
  }  else if(minute() ==26){
      image(taurus,1000,540);
      image(virgo,1700,540);
  }  else if(minute() == 27){
      image(taurus,1000,540);
      image(libra,1700,540);
  }  else if(minute() == 28){
      image(taurus,1000,540);
      image(scorpio,1700,540);
  }  else if(minute() == 29){
      image(taurus,1000,540);
      image(sagit,1700,540);
  }  else if(minute() == 30){
      image(gemini,1000,540);
      image(pluto,1700,540);
  }  else if(minute() == 31){
      image(gemini,1000,540);
      image(aries,1700,540);
  }  else if(minute() == 32){
      image(gemini,1000,540);
      image(taurus,1700,540);
  }  else if(minute() == 33){
      image(gemini,1000,540);
      image(gemini,1700,540);
  }  else if(minute() == 34){
      image(gemini,1000,540);
      image(cancer,1700,540);
  }  else if(minute() == 35){
      image(gemini,1000,540);
      image(leo,1700,540);
  }  else if(minute() == 36){
      image(gemini,1000,540);
      image(virgo,1700,540);
  }  else if(minute() == 37){
      image(gemini,1000,540);
      image(libra,1700,540);
  }  else if(minute() == 38){
      image(gemini,1000,540);
      image(scorpio,1700,540);
  }  else if(minute() == 39){
      image(gemini,1000,540);
      image(sagit,1700,540);
  }  else if(minute() == 40){
      image(cancer,1000,540);
      image(pluto,1700,540);
  }  else if(minute() == 41){
      image(cancer,1000,540);
      image(aries,1700,540);
  }  else if(minute() == 42){
      image(cancer,1000,540);
      image(taurus,1700,540);
  }  else if(minute() == 43){
      image(cancer,1000,540);
      image(gemini,1700,540);
  }  else if(minute() == 44){
      image(cancer,1000,540);
      image(cancer,1700,540);
  }  else if(minute() == 45){
      image(cancer,1000,540);
      image(leo,1700,540);
  }  else if(minute() == 46){
      image(cancer,1000,540);
      image(virgo,1700,540);
  }  else if(minute() == 47){
      image(cancer,1000,540);
      image(libra,1700,540);
  }  else if(minute() == 48){
      image(cancer,1000,540);
      image(scorpio,1700,540);
  }  else if(minute() == 49){
      image(cancer,1000,540);
      image(sagit,1700,540);
  }  else if(minute() == 50){
      image(leo,1000,540);
      image(pluto,1700,540);
  }  else if(minute() == 51){
      image(leo,1000,540);
      image(aries,1700,540);
  }  else if(minute() == 52){
      image(leo,1000,540);
      image(taurus,1700,540);
  }  else if(minute() == 53){
      image(leo,1000,540);
      image(gemini,1500,540);
  }  else if(minute() == 54){
      image(leo,1000,540);
      image(cancer,1700,540);
  }  else if(minute() == 55){
      image(leo,1000,540);
      image(leo,1700,540);
  }  else if(minute() == 56){
      image(leo,1000,540);
      image(virgo,1700,540);
  }  else if(minute() == 57){
      image(leo,1000,540);
      image(libra,1700,540);
  }  else if(minute() == 58){
      image(leo,1000,540);
      image(scorpio,1700,540);
  }  else if(minute() == 59){
      image(leo,1000,540);
      image(sagit,1700,540);
  }  else if(minute() == 60){
      image(virgo,1000,540);
      image(pluto,1700,540);
  }  else if(minute() == 0){
      image(pluto,1000,540);
      image(pluto,1700,540);
  }
}


function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(sky);
  image(colon,780,700);
  printHour();
  printMin();
}
