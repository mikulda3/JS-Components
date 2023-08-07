let slides = document.querySelectorAll(".slide");
let i = 1;

slides.forEach(function(slide){
  slide.style.backgroundImage = " url(img/" + (i++) + ".jpg)";

  slide.addEventListener("click", function(){
    removeActive();
    slide.classList.add("active");
  });
});

function removeActive(){
  slides.forEach(function(slide){
    slide.classList.remove("active");
  });
}