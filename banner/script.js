const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slidesLength = slideLeft.querySelectorAll("div").length;

let activeSlide = 0;

// set left side to starting position
slideLeft.style.top = `${-(slidesLength-1)*100}vh`;


arrowUp.addEventListener("click", function(){
  changeSlide("up");
});

arrowDown.addEventListener("click", function(){
  changeSlide("down")
});


function changeSlide(direction){
  const sliderHeight = containerSlider.clientHeight;
  
  if(direction === "up"){
    activeSlide++;
    if(activeSlide > slidesLength - 1){
      activeSlide = 0;
    }
  } else {
    activeSlide--;
    if(activeSlide < 0){
      activeSlide = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
}
