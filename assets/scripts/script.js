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
var userInitial = document.getElementById("playerInitials");
var localStorage = window.localStorage;
var highscoreLink = document.getElementById("highLink");
var highscoreDisplay = document.getElementById("scoreboard");
var scoreItems = document.getElementById("scoreitems");
var returnHome = document.getElementById("homeReturn");
var createLi = document.createElement("li");
var scoreBank = [];


quizContainer.style.display = "none";
gameOverScreen.style.display = "none";
highscoreDisplay.style.display = "none";

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
      endGame();
    }
    testTime--;
  }, 1000);
}

function startTest() {
  var question = questions[questionNum];
  console.log("startTest");
  console.log(question);
  console.log(questionNum);

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
    console.log(score);
  } else {
    testTime -= 5;
    console.log(score);
  }
  questionNum++;
  startTest();
  console.log(questionNum);
});

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

startButton.addEventListener("click", function () {
  setTimer();
  quizContainer.style.display = "block";
  startTest();
  startPage.style.display = "none";
});
submitScore.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBank.push(score);
  localStorage.setItem("score", score);
  endGame();
});


function endGame() {
  quizContainer.style.display = "none";
  startPage.style.display = "none";
  gameOverScreen.style.display = "block";

  for (i = 0; i < localStorage.length; i++) {
    createLi.innerHTML = userInitial.value + ": " + localStorage.key(i).value;
    scoreItems.innerHTML = createLi;
  }
}

var highscores = JSON.parse(localStorage.getItem("highscores"));
