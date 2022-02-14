let attempt = 0;
let guess = 0;
let checkWon = true;
let writedWord = [];


let canvas = document.querySelector("#draw-game");
let brush = canvas.getContext("2d");

let rotate = (50 * Math.PI) / 180;
brush.fillStyle = "#996633";
//base right
brush.rotate(rotate);
brush.fillRect(510, 250, 10, 110);
brush.rotate(-rotate);

//base left
rotate = (40 * Math.PI) / 180;
brush.rotate(rotate);
brush.fillRect(460, 335, 109, 10);
brush.rotate(-rotate);
//base
brush.fillRect(52.5, 620, 167, 10);

let process = () => {
  attempt += 1;

  brush.fillStyle = "#996633";

  if (attempt >= 1) {
    //stick large column
    brush.fillStyle = "#996633";
    brush.fillRect(130, 10, 10, 550);
  }
  if (attempt >= 2) {
    //horizontal stick
    brush.fillRect(130, 10, 200, 10);
  }
  if (attempt >= 3) {
    //stick head
    brush.fillRect(330, 10, 10, 70);
    brush.fillStyle = "black";
  }
  if (attempt >= 4) {
    //head
    brush.fillStyle = "black";
    brush.beginPath();
    brush.arc(335, 115, 35, 0, 2 * Math.PI);
    brush.fillStyle;
    brush.lineWidth = 15;
    brush.stroke();
  }
  if (attempt >= 5) {
    // neck
    brush.fillRect(329, 150, 10, 25);
    // chest
    brush.fillRect(310, 172, 50, 125);
  }
  if (attempt >= 6) {
    //arm right
    rotate = (50 * Math.PI) / 180;
    brush.rotate(rotate);
    brush.fillRect(332, -128, 17, 70);
    brush.rotate(-rotate);
  }
  if (attempt >= 7) {
    //arm left

    rotate = (45 * Math.PI) / 180;
    brush.lineCap = "round";
    brush.rotate(rotate);
    brush.fillRect(375, -132, 70, 17);
    brush.rotate(-rotate);
  }
  if (attempt >= 8) {
    // chest
    rotate = (30 * Math.PI) / 180;
    brush.rotate(rotate);
    brush.fillRect(417, 80, 25, 120);
    brush.rotate(-rotate);
  }
  if (attempt >= 9) {
    //leg left
    rotate = (55 * Math.PI) / 180;
    brush.rotate(rotate);
    brush.fillRect(435, -128, 120, 25);
    brush.rotate(-rotate);
    brush.globalAlpha = 0.7;
    brush.fillStyle = "red";
    brush.fillRect(240, 20, 950, 250);
    brush.globalAlpha = 1;
    brush.fillStyle = "white";
    brush.font = "15vw Bangers";
    brush.fillText("PERDISTE", 280, 250);

    brush.fillStyle = "black";

    let startWord = 450;

    brush.font = "5vw Bangers";
    for (let i = 0; i < selectWord.length; i++) {
      brush.fillText(selectWord[i].toLocaleUpperCase(), startWord, 500);
      startWord += 80;
    }
    context = null;
  }
};

let screen = document.querySelector("#background-game");

screen.addEventListener("keypress", function (event) {//keypress

  let check = false;

  let startWord = 450;
  brush.fillStyle = "black";
  brush.font = "5vw Bangers";

  if (!writedWord.includes(event.key)) {
    writedWord.push(event.key);

    for (let i = 0; i < selectWord.length; i++) {
      if (guess < selectWord.length) {
        if (event.key === selectWord[i]) {
          brush.fillText(selectWord[i].toLocaleUpperCase(), startWord, 500);
          check = true;
          guess += 1;
        }
      }
      startWord += 80;
    }
    if (check == false && guess < selectWord.length) {
      process();
    }

    if (guess === selectWord.length) {
      brush.globalAlpha = 0.7;
      brush.fillStyle = "green";
      brush.fillRect(250, 20, 950, 270);
      brush.globalAlpha = 1;
      brush.fillStyle = "white";
      brush.font = "15vw Bangers";
      brush.fillText("GANASTE", 280, 250);
      context = null;
      checkWon = false;
    }
  }
});

const setup = () => {
  brush.fillStyle = "black";
  let responseWord = randomWord();
  let len = 0;
  let dash = 440;
  while (len < responseWord.length) {
    len += 1;
    brush.fillRect(dash, 520, 60, 10); //68
    dash += 80;
  }
  return responseWord;
};
let selectWord = setup();

let restart = document.getElementById("restart");
restart.addEventListener("click", function (event) {
  history.go();
});

