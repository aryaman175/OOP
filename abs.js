
let absParts =[]
for(let i=0;i<3;i++)
{
  absParts[i]= [];
}

let machineInfo = " 1) Ingredients \n 2) Usage of buttons"
let progInfo = " 1) Program how the internal components \n react when a button is clicked\n"
let elecInfo = " 1) Assembly of hardware components \n 2) Power ratings of internal applinaces"

$(document).ready(function() {

  absParts[0][0] = machineImg;
  absParts[1][0] = progImg;
  absParts[2][0] = elecImg;

  absParts[0][1] = machineInfo;
  absParts[1][1] = progInfo;
  absParts[2][1] = elecInfo;

  $("#next").on("click",function()
 {
   background(255,218,185)
   if(count<2)
   count++;
   image(absParts[count][0],150,0);
 })

 $("#prev").on("click",function()
{
  background(255,218,185)
  if(count>0)
   count--;
   image(absParts[count][0],150,0);
})

$("#info").on("click",function()
{
 text(absParts[count][1], 130, 400);
})

})
