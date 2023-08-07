const text = "This text is about nothing at all."

const heading = document.getElementById("text");
const speed = document.getElementById("speed");

let id = 1;
let delay = 400 / speed.value;

function printTextBackwards(){
  heading.textContent = text.slice(0, id);
  
  id--;

  if(id < 0){
    id = 1;
    setTimeout(printTextForward, delay*10);
  } else {
    setTimeout(printTextBackwards, delay);
  }
}

function printTextForward(){
  heading.textContent = text.slice(0, id);
  
  id++;
  if(id > text.length){
    setTimeout(printTextBackwards, delay*10);
  } else {
    setTimeout(printTextForward, delay);
  }
}

printTextForward();

speed.addEventListener("input", function(event) {
  delay = 500 / event.target.value;
});