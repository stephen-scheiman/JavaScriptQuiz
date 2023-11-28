//Create an oject to hold the questions and answers
var questions = [
  {
    question: "What is the output of this code: console.log(typeof null)",
    choices: ["null", "object", "undefined", "string"],
    answer: 1,
  },

  {
    question: "Which of the below is proper syntax for an IF statement",
    choices: ["if i=5 then", "if i=5", "if i==5 then", "if(i==5)"],
    answer: 3,
  },

  {
    question:
      "What is the correct location to reference an external JavaScript file?",
    choices: [
      "The <head> section",
      "The <footer> section",
      "The <body> section",
      "Either <head> or <body> section",
    ],
    answer: 3,
  },
  {
    question: "How do you call a function named myFunction()?",
    choices: [
      "function myFunction()",
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
    ],
    answer: 2,
  },
  {
    question:
      "What is the correct syntax for referring to an external script named 'xxx.js'?",
    choices: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<href script='xxx.js'>",
    ],
    answer: 2,
  },
  {
    question: "Which HTML Element holds the location of a JavaScript file?",
    choices: ["js tag", "script tag", "file tag", "java tag"],
    answer: 1,
  },
  {
    question: "What is the output of this code: console.log(2 + '2')",
    choices: ["4", "22", "NaN", "undefined"],
    answer: 1,
  },
  {
    question:
      "What is the correct JS syntax to change the content of the HTML element below?",
    choices: [
      'document.getElementById("demo").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";',
      'document.getElementByName("p").innerHTML = "Hello World!";',
    ],
    answer: 0,
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    choices: [
      'alertBox("Hello World");',
      'msgBox("Hello World!");',
      'msg("Hello World");',
      'alert("Hello World");',
    ],
    answer: 3,
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
      "myfunction() = function",
    ],
    answer: 0,
  },
  {
    question:
      'What is the correct syntax for an IF statement to execute if "i" is NOT equal to 5?',
    choices: ["if (i<>5)", "if i=!5 then", "if (i!=5)", "if i<>5"],
    answer: 0,
  },
  {
    question: "What is the output of this code: console.log(2=='2')",
    choices: ["true", "false", "NaN", "undefined"],
    answer: 0,
  },
  {
    question: "How does a WHILE loop start?",
    choices: [
      "while (i <= 10)",
      "while i = 1 to 10",
      "while (i <=10; i++",
      "do i while (i < 10)",
    ],
    answer: 0,
  },
];

//Create a variable to hold the question number
var questionNum = 0;

//Variable to hold the score
var score = 0;

//Variable to hold the user's answer choice
var choice = 0;

//Variables to hold questions and answer choices
var questionEl = document.getElementById("questions");
var choiceOneEl = document.getElementById("choiceOne");
var choiceTwoEl = document.getElementById("choiceTwo");
var choiceThreeEl = document.getElementById("choiceThree");
var choiceFourEl = document.getElementById("choiceFour");

//Variable to hold the Start button, feedback and timer elements
var startButton = document.getElementById("startButton");
var timerWindow = document.getElementById("timerWindow");
var feedbackBox = document.getElementById("feedbackBox");

//Variables for the High Score List
var userName = document.querySelector("#userName");
var highScores = [{name, score}];
var userNameForm = document.querySelector("#userNameForm");
var scoreCard = document.querySelector("#scoreCard");
var scoresList = document.querySelector("#scoresList");

questionEl.style.display = "none";
choiceOneEl.style.display = "none";
choiceTwoEl.style.display = "none";
choiceThreeEl.style.display = "none";
choiceFourEl.style.display = "none";
feedbackBox.style.display = "none";
scoreCard.style.display = "none";
scoresList.style.display = "none";

//Initial timer value (in ms)
var timer = 60000;

function startTimer() {
  startButton.style.display = "none";
  countdownTimer = setInterval(function () {
    timer = timer - 1000;
    timerWindow.textContent = "Time left: " + timer / 1000 + " seconds";
    displayQuestion(questionNum);
    if (timer <= 0) {
      clearInterval(countdownTimer);
      gameOver(score);
    }
  }, 1000);
}

//Sounds
var audio = document.getElementById("audio");

//Display questions and answer choices
function displayQuestion(questionNum) {
  questionEl.textContent = questions[questionNum].question;
  questionEl.style.display = "block";
  choiceOneEl.textContent = questions[questionNum].choices[0];
  choiceOneEl.style.display = "block";
  choiceTwoEl.textContent = questions[questionNum].choices[1];
  choiceTwoEl.style.display = "block";
  choiceThreeEl.textContent = questions[questionNum].choices[2];
  choiceThreeEl.style.display = "block";
  choiceFourEl.textContent = questions[questionNum].choices[3];
  choiceFourEl.style.display = "block";
}

//Use event listeners to detect mouseover and click for selecting answer choice
choiceOneEl.addEventListener("mouseover", function () {
  choiceOneEl.style.fontStyle = "italic";
  choiceOneEl.style.fontWeight = "bold";
  choiceOneEl.style.fontSize = "25px";
});
choiceOneEl.addEventListener("mouseout", function () {
  choiceOneEl.style.fontStyle = "normal";
  choiceOneEl.style.fontWeight = "normal";
  choiceOneEl.style.fontSize = "16px";
});
choiceOneEl.addEventListener("click", function () {
  choice = 0;
  if (choice == questions[questionNum].answer) {
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
});
choiceTwoEl.addEventListener("mouseover", function () {
  choiceTwoEl.style.fontStyle = "italic";
  choiceTwoEl.style.fontWeight = "bold";
  choiceTwoEl.style.fontSize = "25px";
});
choiceTwoEl.addEventListener("mouseout", function () {
  choiceTwoEl.style.fontStyle = "normal";
  choiceTwoEl.style.fontWeight = "normal";
  choiceTwoEl.style.fontSize = "16px";
});
choiceTwoEl.addEventListener("click", function () {
  choice = 1;
  if (choice == questions[questionNum].answer) {
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
});
choiceThreeEl.addEventListener("mouseover", function () {
  choiceThreeEl.style.fontStyle = "italic";
  choiceThreeEl.style.fontWeight = "bold";
  choiceThreeEl.style.fontSize = "25px";
});
choiceThreeEl.addEventListener("mouseout", function () {
  choiceThreeEl.style.fontStyle = "normal";
  choiceThreeEl.style.fontWeight = "normal";
  choiceThreeEl.style.fontSize = "16px";
});
choiceThreeEl.addEventListener("click", function () {
  choice = 2;
  if (choice == questions[questionNum].answer) {
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
});
choiceFourEl.addEventListener("mouseover", function () {
  choiceFourEl.style.fontStyle = "italic";
  choiceFourEl.style.fontWeight = "bold";
  choiceFourEl.style.fontSize = "25px";
});
choiceFourEl.addEventListener("mouseout", function () {
  choiceFourEl.style.fontStyle = "normal";
  choiceFourEl.style.fontWeight = "normal";
  choiceFourEl.style.fontSize = "16px";
});
choiceFourEl.addEventListener("click", function () {
  choice = 3;
  if (choice == questions[questionNum].answer) {
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
});

//Start the countdown timer when the user clicks on the Start Button
startButton.addEventListener("click", startTimer);

//TODO: Play audio on hover and click
function play() {
  var audio = document.getElementById("audio");
}

//TODO: function to end game and display high score list
function gameOver(score) {
  startButton.style.display = "none";
  displayScore(score);
}

//A function that tracks correct answers
function rightAnswer(score) {
  feedbackBox.textContent = "Your answer is: CORRECT!";
  feedbackBox.style.display = "block";
}

//A function that penalizes wrong answers by decrementing the timer by five seconds
function wrongAnswer() {
  timer = timer - 5000;
  feedbackBox.textContent = "Your answer is: INCORRECT!";
  feedbackBox.style.display = "block";
  return timer;
}

// Display the user's score
function displayScore(score) {
  scoreCard.style.display = "flex";
  scoreCard.textContent = "GAME OVER: You scored " + score + " points!";
  questionEl.style.display = "none";
  choiceOneEl.style.display = "none";
  choiceTwoEl.style.display = "none";
  choiceThreeEl.style.display = "none";
  choiceFourEl.style.display = "none";
  feedbackBox.style.display = "none";
  saveHighScore(score);
}

function saveHighScore(score) {
  scoresList.style.display = "block";
  userNameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = userName.value.trim();
    if (name === "") {
      return;
    }
    var newScore = {
      name,
      score,
    };
    highScores.push(newScore);
    localStorage.setItem(highScores, JSON.stringify(highScores));
    userName.value = "";
    userNameForm.style.display = "none";
    displayHighScores(score, name);
  });
}

function displayHighScores(score, name) {
  var scoresList = document.querySelector("#scoresList");
  scoresList.style.display = "flex";
  var storedScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(storedScores);
  var arrLength = highScores.length;
  if (storedScores !== null) {
    for (i=0; i<=storedScores.length; i++){
    highScores[i] = storedScores[i];
  }
}
  var ol = document.querySelector("#list");
  for (i=0; i<=5; i++){
      var li = document.createElement("li");
      li.textContent = highScores[i].name + highScores[i].score;
      ol.appendChild(li);
    }
  }
