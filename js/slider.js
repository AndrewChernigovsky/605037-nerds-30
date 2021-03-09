const slider = document.querySelector(".site-wrapper");
const slideCurrent = document.querySelector(".slide-current");
const sliderControls = document.querySelector(".current");
const sliderButton = slider.querySelector("button");

sliderControls.addEventListener("click", function(evt){
  if (sliderControls){
    sliderButton.classList.add("current");
  }else{
    sliderButton.classList.remove("current");
  }
});
