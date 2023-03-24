function changeColor() {
  let hex_numbers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let hexcode = "";
  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode = hexcode + hex_numbers[random_index];
  }

  document.getElementById("hex-code").innerHTML = hexcode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}
