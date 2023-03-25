let number = 0;
function increase() {
  number = number + 1;
  document.getElementById("value").innerHTML = number;
  console.log(" + clicked");
}
function decrase() {
  number -= 1;
  document.getElementById("value").innerHTML = number;
  console.log("- clicked");
}
