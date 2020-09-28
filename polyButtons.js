let streetCode = "icecream order_chocoblueberry(street)  \n  {  \n    return blueberry_icecream_with_\n    chocolate_syrup;   }"
let mallCode = "icecream order_chocoblueberry(mall)  \n  {  \n    return chocolate_muffin_blueberry_icecream; \n  }"
let t =1000;

function hideAll()
{
  $("#next").hide();
  $("#prev").hide();
  $("#info").hide();
  $("#street").hide();
  $("#mall").hide();
  $("#code").hide();
  $("#order").hide();
  $("h2").hide();
}

$(document).ready(function() {

  hideAll();
 // places buttons
 let streetButton = document.getElementById("street")
 let mallButton = document.getElementById("mall")

// toggling btw place buttons
  $(streetButton).on("click",function()
 {
   $(streetButton).addClass("on");
   $(mallButton).removeClass("on");

   background(255,218,185);
   image(streetImg,150,0);

 })

 $(mallButton).on("click",function()
 {
  $(mallButton).addClass("on");
  $(streetButton).removeClass("on");

  background(255,218,185);
  image(mallImg,150,0);

 })

 $("#order").on("click",function()
 {
   background(255,218,185);

   let temp=setLocImg();
   if(temp==1)
      image(bbImg,150,320);
   else if(temp==2)
      image(muffinImg,150,320);
 })

 $("#code").on("click",function()
 {
   background(255,218,185);

   let temp=setLocImg();
   if(temp==1)
    text(streetCode, 50, 400);
    else if(temp==2)
    text(mallCode, 50, 400);
 })

 function setLocImg()
 {
   if($(streetButton).hasClass("on"))
      {
        image(streetImg,150,0);
        return 1;
      }
   else if($(mallButton).hasClass("on"))
      {
        image(mallImg,150,0);
        return 2;
      }
 }

 $(poly).on("click",function()
{
  background(255,218,185);
  $(poly).addClass("active")
  $(abst).removeClass("active")

  $("#next").slideUp(t);
  $("#prev").slideUp(t);
  $("#info").slideUp(t);


  $(streetButton).slideDown(t);
  $(mallButton).slideDown(t);
  $("#code").slideDown(t);
  $("#order").slideDown(t);
  $("h2").slideDown(t);
})

$(abst).on("click",function()
{
 background(255,218,185);
 $(abst).addClass("active")
 $(poly).removeClass("active")

  
 $("#next").slideDown(t);
 $("#prev").slideDown(t);
 $("#info").slideDown(t);

 $(streetButton).slideUp(t);
 $(mallButton).slideUp(t);
 $("#code").slideUp(t);
 $("#order").slideUp(t);
 $("h2").slideUp(t);
})

})
