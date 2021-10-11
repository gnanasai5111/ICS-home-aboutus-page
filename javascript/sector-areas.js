
// sectorareas
var sectorBox=$(".sector-box");

sectorBox.mouseover(function(){

  $(this).children("a.sector-box-areas").css("background-color","#556069");
  $(this).find("i.sector-icons").css("color","#fff");
  $(this).find("span.sector-box-text").css("color","#fff");
  $(this).find("span.sector-box-line").animate({marginLeft:'100px',
opacity:'0'},10);
// $('.sector-img-wrap').css("background-image")
});
sectorBox.mouseout(function(){

  $(this).children("a.sector-box-areas").css("background-color","#f9f9f9");
  $(this).find("i.sector-icons").css("color","#000");
  $(this).find("span.sector-box-text").css("color","#414655");
  $(this).find("span.sector-box-line").animate({marginLeft:'0px',
opacity:'1'},10);

});


// home page text fadein and  falling animation
var content=$(".home-overlay-content");
var items=$(".slider-home");

var options={
  root:null,
  rootMargin:'0px',
  threshold:0.3

}
var observer=new IntersectionObserver((entries,observer)=>{
  console.log(entries,observer);
  entries.forEach((entry)=>{
    if(entry.isIntersecting){

      entry.target.classList.add("fadeup")
    }
    else{
      entry.target.classList.remove("fadeup");
    }
  })

},options);

for(var i=0;i<content.length;i++){
  observer.observe(content[i]);
}
