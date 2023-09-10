let currentPlayer = "";
let player1Score = 0;
let player2Score = 0;

const p1Dice = document.getElementById("score_1"); // getting player - 1 score div element
const p2Dice = document.getElementById("score_2"); //getting player - 2 score div element

const p1Btn = document.getElementById("player_1_btn"); // getting player - 1 button div element
const p2Btn = document.getElementById("player_2_btn"); // getting player - 2 button div element

const startGame = document.getElementById("current-player");
const resetBtn = document.getElementById("reset");
const diceImage = document.getElementById("dice_image");

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

p1Btn.addEventListener("click", player1Play);
p2Btn.addEventListener("click", player2Play);

resetBtn.addEventListener("click", resetGame);

function player1Play() {
  play("Player_1");
}

function player2Play() {
  play("Player_2");
}

function play(player) {
  debugger;
  currentPlayer = player;
  const rollResult = roll();
  diceImage.src = "images/img-" + rollResult + ".png";

  if (player == "Player_1") {
    player1Score += rollResult;
    p1Dice.innerText = player1Score;
    if (player1Score >= 30) {
      btnDisable();
      //   p1Btn.disabled = true;
      //   p2Btn.disabled = true;

      startGame.innerText = "Player 1 Win 🎉🎊";
    } else {
      p1Btn.disabled = true;
      p2Btn.disabled = false;
      startGame.innerText = "Player-2 To Play";
      p1Btn.style.backgroundColor = "green";
      p2Btn.style.backgroundColor = "gray";
    }
  } else {
    player2Score += rollResult;
    p2Dice.innerText = player2Score;
    if (player2Score >= 30) {
      btnDisable();
      //   p1Btn.disabled = true;
      //   p2Btn.disabled = true;

      startGame.innerText = "Player 2 Win 🎉🎊";
    } else {
      p1Btn.disabled = false;
      p2Btn.disabled = true;
      startGame.innerText = "Player-1 To Play";
      p1Btn.style.backgroundColor = "gray";
      p2Btn.style.backgroundColor = "green";
    }
  }
}

function btnDisable() {
  p1Btn.disabled = true;
  p2Btn.disabled = true;
}

function activeButton() {
  document.getElementsByClassName("btn").style.backgroundColor = "green";
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  p1Dice.innerText = 0;
  p2Dice.innerText = 0;
  p1Btn.disabled = false;
  p2Btn.disabled = false;
  startGame.innerText = "Start Game";
  diceImage.src = "images/img-1.png";
}
