const userInput = document.getElementById("userInput");

let experssion = "";

function press(number) {
  experssion = experssion + number;
  userInput.value = experssion;
}
function equal() {
  userInput.value = eval(experssion);
  experssion = "";
}
function erase() {
  userInput.value = "";
  userInput.value = experssion;
}
