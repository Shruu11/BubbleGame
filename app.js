let hitrn;
let timer = 30;
let score = 0;
function makeBubble() {
  let cutter = "";
  for (let i = 1; i <= 120; i++) {
    cutter += `<div class="bubble">${Math.floor(Math.random() * 10)} </div>`;
  }
  document.querySelector("#pbtm").innerHTML = cutter;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").innerHTML = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>⏰ Time Over! Final Score: ${score}</h1>`;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedBubble = dets.target;
  if (clickedBubble.classList.contains("bubble")) {
    let clickbubble = Number(clickedBubble.textContent);
    if (clickbubble === hitrn) {
      increaseScore();
      clickedBubble.classList.add("remove");
      setTimeout(() => {
        makeBubble();
        getNewHit();
      }, 300); // matches CSS transition time }
    }
  }
});

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }
  document.querySelector("#highScoreBox").textContent = highScore;
}
document.querySelector("#restartBtn").addEventListener("click", function () {
  score = 0;
  timer = 60;
  document.querySelector("#scoreValue").textContent = score;
  document.querySelector("#timerValue").textContent = timer;
  document.querySelector("#highScoreBox").textContent = highScore;
  runTimer();
  makeBubble();
  newHit();
});
let highScore = localStorage.getItem("highScore") || 0;
document.querySelector("#highScoreBox").textContent = highScore;

//let highScore = localStorage.getItem("highScore") || 0;
/*function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.querySelector("highScoreBox").textContent = highScore;
  }
} */
function startGame() {
  runTimer();
  makeBubble();
  getNewHit();
  //updateHighScore();
}
startGame();
