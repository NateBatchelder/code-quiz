var startPage = document.getElementById("startPage");
var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var quizContainer = document.getElementById("quiz");
var gameOverScreen = document.getElementById("gameOver");
var questionPrompt = document.getElementById("questionPrompt");
var testTime = 60;
var score = 0;
var answerBank = document.getElementById("answerBank");
var submitScore = document.getElementById("scoreSubmit");
var localStorage = window.localStorage;
var highscoreLink = document.getElementById("hallOfFame");
var highscoreDisplay = document.getElementById("scoreboard");
var scoreItems = document.getElementById("scoreItems");
var returnHome = document.getElementById("homeReturn");
var createLi = document.createElement("li");
var scoreBank = [];

let finalScore = document.getElementById("submitScore");

// read scores from local store
var updateHallOfFame = function () {
  // read local store for highscores array object
  initialArray = JSON.parse(store.getItem("submitScore"));
  // if it is first use the just set to an empty array object
  if (initialArray == null) {
    initialArray = [];
    store.setItem("hofScores", JSON.stringify(initialArray));
  }
  initialArray.forEach(function (value) {
    var node = document.createElement("li");
    var txtNode = document.createTextNode(value.initial + " - " + value.score);
    node.appendChild(txtNode);
    orderlistHighScoresEl.appendChild(node);
  });
};

// Any number of questions can be asked in this section for the quiz.  Here, there are ten questions presented with four answer choices per question.
// A simple way to create a new question type would be for there to be a 'true' and 'false' answer choice with two buttons.

var questionNum = 0;
var questions = [
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
  {
    prompt:
      "This is a placeholder question. Please replace this with a real question.",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0, //index of correct answer
  },
];

function setTimer() {
  var timerInterval = setInterval(function () {
    timer.textContent = testTime;
    if (testTime <= 0 || questionNum === questions.length) {
      clearInterval(timerInterval);
      timer.textContent = "GAME OVER";
      // endGame();
    }
    testTime--;
  }, 1000);
}

function startTest() {
  var question = questions[questionNum];
  // this logs that a new question is being asked
  console.log("Next Question!");
  // this logs the question number being asked
  console.log(questionNum);
  // this logs the question being asked
  console.log(`the question reads: `, question);

  questionPrompt.textContent = questions[questionNum].prompt;

  button1 = document.getElementById("button1");
  button2 = document.getElementById("button2");
  button3 = document.getElementById("button3");
  button4 = document.getElementById("button4");
  button1.textContent = questions[questionNum].answers[0];
  button2.textContent = questions[questionNum].answers[1];
  button3.textContent = questions[questionNum].answers[2];
  button4.textContent = questions[questionNum].answers[3];
}

answerBank.addEventListener("click", function (event) {
  userChoice = event.target;

  if (
    userChoice.textContent ===
    questions[questionNum].answers[questions[questionNum].correct]
  ) {
    score += 10;
    console.log(`CORRECT! Score increases by ten points to: `, score);
    console.log(`Current /SCORE/ is: `, score);
    console.log(`Current /TIME/ remaining is `, testTime);
  } else {
    testTime -= 5;
    console.log(`INCORRECT! Time decreaces by 5 seconds to: `, testTime);
    console.log(`Current /SCORE/ is: `, score);
    console.log(`Current /TIME/ remaining is `, testTime);
  }
  questionNum++;

  if (questionNum < questions.length) {
    startTest();
  } else {
    console.log(`End of Game!`);
    console.log(
      `Score is: `,
      score,
      `.`,
      `With `,
      testTime,
      `seconds remaining.`
    );

    displayEndGameDivs();
  }
});

function displayEndGameDivs() {
  // display the gameOver div
  // hide the quiz div
  // hide the startPage div ("none")
}

function displayStartPageDiv() {
  // display the startPage div
  // hide the gameOver div
  // hide the quiz div ("none")
}

function displayScoreboardDiv() {
  // display the scoreboard div
  // hide the startPage div ("none")
  // hide the gameOver div
}

highscoreLink.addEventListener("click", function () {
  startPage.style.display = "none";
  quizContainer.style.display = "none";
  gameOverScreen.style.display = "none";
  highscoreDisplay.style.display = "block";
});

returnHome.addEventListener("click", function () {
  startPage.style.display = "block";
  quizContainer.style.display = "none";
  gameOverScreen.style.display = "none";
  highscoreDisplay.style.display = "none";
});

//
startButton.addEventListener("click", function () {
  setTimer();
  quizContainer.style.display = "block";
  startTest();
  startPage.style.display = "none";
});

// ?does this become redundant b/c we have the function displayStartPageDiv()?
restartButton.addEventListener("click", function () {
  startPage.style.display = "block";
  quizContainer.style.display = "none";
  gameOverScreen.style.display = "none";
  highscoreDisplay.style.display = "none";
});

//
submitScore.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBank.push(score);
  localStorage.setItem("score", score);
  endGame();
});

function endGame() {
  // grab the username that was inputed by the user
  var userName = document.getElementById("playerName").value;
  // grab the score that was inputed by the user
  var userScore = document.getElementById("finalScore").value;
  console.log(`userScore `, userScore);
  // set the these items to the localStorage
  localStorage.setItem(userName.value, userScore.value);
  // key username value score

  quizContainer.style.display = "none";
  startPage.style.display = "none";
  gameOverScreen.style.display = "block";

  // for (i = 0; i < localStorage.length; i++) {
  //   createLi.innerHTML = userName.value + ": " + localStorage.key(i).value;
  //   console.log(createLi); // this logs the user's name and score
  //   scoreItems.innerHTML = createLi;
  // }
}

var highscores = JSON.parse(localStorage.getItem("highscores"));
