// dom elements
var questionsEl = document.querySelector("#prompts");
var timerEl = document.querySelector("#timerCountDown");
var optionsEl = document.querySelector("#options");
var submitBtnEl = document.querySelector("#submit-initials");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var resultsEl = document.querySelector("#results");
var reStartBtn = document.querySelector("#restart");
var leaderboarBtnEl = document.querySelector("#view-top-scores");

// questions, options, and answers for quiz
var questions = [
  {
    prompt: "what are the data types supported by JavaScript?",
    options: ["undefined, null, boolean, string, attributes, number, object", "undefined, null, boolean, string, symbols, number, object", "undefined, flurps , boolean, string, symbols, number, object", "undefined, null, boolean, string, attrributes, number, emojis"],
    answer: "undefined, null, boolean, string, symbols, number, object"
      
  },
  {
    prompt: "What is NaN property in JavaScript?",
    options: ["Not-a-Nugget", "Not-a-Neutral", "Not-a-Number", "none of the above"],
    answer: "Not-a-Number"
      
  },
  {
    prompt: "What company developed JavaScript?",
    options: ["NetScape", "AltaVista", "GeoCities", "GnatScape"],
    answer: "NetScape"
      
  },
  {
    prompt: "What is an undeclared variable?",
    options: ["variable that does not exist in a program and are not declared", "variables that are declared in the program but have not been given any value", " variables that want to remain nameless", "variables that exist in the program but are being quiet about it"],
    answer: "variable that does not exist in a program and are not declared"
      
  },
  {
    prompt: "What is an undefined variable?",
    options: ["crouching variable, hidden definition", "variables that are hipsters that are against labels", "variables that do not exist in a program and are not declared", "variables that are declared in the program but have not been given any value"],
    answer: "variables that are declared in the program but have not been given any value"
      
  },
  {
    prompt: "What is a prompt box?",
    options: [" A mailed mystery box for coders", " A box that allows the user to enter input by providing a text box", "A box that allows the user to get an answer in a timely fashion", "none of the above"],
    answer: "dumplings"
      
  },
  {
    prompt: "Which symbol is used for comments in JavaScript?",
    options: ["// for single line, /* */ for multi line comments", "<!-- --> for single line, <<!-- -->> for multi line comments", "/* */ for single line, // for multi line comments", " || for single line, && for multi line comments"],
    answer: " // for single line, /* */ for multi line comments"
      
  },
  {
    prompt: "What does Null mean in JavaScript?",
    options: ["Not Under Loss Leader", " The value represents a value of an exceptional object", "The value represents no value or no object", "none of the above"],
    answer: "The value represents no value or no object"
      
  },
  {
    prompt: "What are all the types of Pop up boxes available in JavaScript?",
    options: ["Alert, Conform, and Prompt", "Poke, Stop, and Confirm", "Alert, Confirm, and Prompt", " Fast, Slow, and Somewhere in between"],
    answer: "Alert, Confirm, and Prompt"
      
  },
  {
    prompt: "What is Global Scope?",
    options: ["A variable declared within a JavaScript function", "A variable declared outside a function", "A scope used by PitBull AKA 'Mr. Worldwide'", "none of the above"],
    answer: "A variable declared outside a function"
      
  }
];

// state variables
var questionIndex = 0;
var time = 120;
var timerId;

// activate quiz
function startQuiz() {
  timerId = setInterval(timerTick, 1000);
  timerEl.textContent = time;
  var mainScreenEl = document.getElementById("starting-page");
  mainScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}


function getQuestion() {
  var currentQuestion = questions[questionIndex];
var promptEl = document.getElementById("question-prompt")
  promptEl.textContent = currentQuestion.prompt;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(function(choice, i) {
      var choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choiceBtn.onclick = questionClick;
      optionsEl.appendChild(choiceBtn);
  });
}

// answer click to handle moving to next question and alert to wrong/right answer
function questionClick() {
  if (this.value !== questions[questionIndex].answer) {
    time -= 5;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    resultsEl.textContent = "Wrong!";
    resultsEl.style.color = "red";
  } else {
    resultsEl.textContent = "Correct!";
    resultsEl.style.color = "green";
  }
  resultsEl.setAttribute("class", "results");
  setTimeout(function() {
    resultsEl.setAttribute("class", "results hide");
  }, 2000);
  questionIndex++;
  if (questionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}


// end screen function displaying final time
function quizEnd() {
  clearInterval(timerId);
  var endScreenEl = document.getElementById("ending");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("final-time");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}


// if time reaches zero game is over
function timerTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    alert("Times Up!");
    quizEnd();
  }
}

// save scores to localStorage
function saveHighscore() {
  var initial = initialsEl.value.trim();
  if (initial !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initialsEl.value
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    submitBtnEl.onclick = alert("score saved! Please click Leaderboard to view!"); 
  }
}

function checkForEnter(event) {
  if (event.key === "enter") {
      saveHighscore();
  }
}

initialsEl.onkeyup = checkForEnter;

submitBtnEl.onclick = saveHighscore;

startBtn.onclick = startQuiz;
