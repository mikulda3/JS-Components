const button = document.querySelector(".btn");

button.addEventListener("click", function(){
  document.querySelector(".search").classList.toggle("active");
  document.querySelector(".input").focus();
});