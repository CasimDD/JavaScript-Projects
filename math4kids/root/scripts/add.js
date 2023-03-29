const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
let answer = 0;
function generate_equation() {
  let num1 = Math.floor(Math.random() * 13);
  let num2 = Math.floor(Math.random() * 13);

  let dummyAnswer1 = Math.floor(Math.random() * 13);
  let dummyAnswer2 = Math.floor(Math.random() * 23);

  let allAnswers = [];
  let switchAnswers = [];
  answer = num1 + num2;
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--; ) {
    // lengt=3 old icin i =2 den dönmeye başlıcak.
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
      //0-1-2 arasından randon sec, secilen index olur, 1 adet çıkar.  0 .indekse ata. onu da switch answer e koy.
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}
option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

generate_equation();
