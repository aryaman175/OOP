let mallImg;
let streetImg;
let muffinImg;
let bbImg;
let machineImg;
let progImg;
let elecImg;
let imgsize = 300;
let x =50;

function preload() {
  mallImg = loadImage(mallLink)
  streetImg = loadImage(streetLink)
  bbImg = loadImage(bbLink)
  muffinImg = loadImage(muffinLink)
  machineImg = loadImage(machineLink)
  progImg = loadImage(progLink)
  elecImg = loadImage(elecLink)
}

function setup() {
  let cnv =createCanvas(700,700);
  cnv.position(100,120);

  mallImg.resize(imgsize, imgsize);
  streetImg.resize(imgsize,imgsize);
  bbImg.resize(imgsize +50,imgsize +50);
  muffinImg.resize(imgsize +50,imgsize+50);
  machineImg.resize(imgsize,imgsize);
  progImg.resize(imgsize,imgsize);
  elecImg.resize(imgsize,imgsize);

  background(255,218,185)
  textSize(30);
}

function draw()
{

}

// function keyPressed()
// {
//   if(keyCode === RIGHT_ARROW)
//   {
//     t=t/2;
//
//     $("#next").slideUp(t);
//     $("#prev").slideUp(t);
//     $("#info").slideUp(t);
//
//     $("#street").slideUp(t);
//     $("#mall").slideUp(t);
//     $("#code").slideUp(t);
//     $("#order").slideUp(t);
//     $("h2").slideUp(t);
//     background(255,218,185);
//     textSize(100);
//     fill(0, 102, 153);
//     text("Thank You!", 200, 200);
//   }
// }
