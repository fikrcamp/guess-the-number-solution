//code
let randomNumber = Math.trunc(Math.random() * 20) + 1; // 1 - 20
let score = 20;
let highScore = 0;

console.log(randomNumber);

document.querySelector(".check").addEventListener("click", function () {
  let input = document.querySelector(".guess").value;

  if (score <= 0) return;

  if (input == randomNumber) {
    //1. background = green
    document.querySelector("body").style.backgroundColor = "green";
    //2. message = correct
    document.querySelector(".message").innerText = "Correct Number";
    //3. ? = random number
    document.querySelector(".number").innerText = randomNumber;

    if (score > highScore) {
      highScore = score; //19
      document.querySelector(".highscore").innerText = highScore;
    }
  } else if (input < 1 || input > 20) {
    document.querySelector(".message").innerText = "Enter a valid number";
    score = score - 2;
    document.querySelector(".score").innerText = score;
  } else {
    //if input > random number  message too high
    //if input < random number message == too low

    score--;
    document.querySelector(".score").innerText = score;

    if (input > randomNumber) {
      document.querySelector(".message").innerText = "Too High";
      document.querySelector("body").style.backgroundColor = "orange";
    } else if (input < randomNumber) {
      document.querySelector(".message").innerText = "Too Low";
      document.querySelector("body").style.backgroundColor = "orange";
    }
  }

  if (score <= 0) {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".message").innerText = "Game Over";
    document.querySelector(".score").innerText = "0";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1; // 1 - 20
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").innerText = "?";
  document.querySelector(".message").innerText = "Start Guessing ....";
  score = 20;
  document.querySelector(".score").innerText = score;
  document.querySelector(".guess").value = "";
});
