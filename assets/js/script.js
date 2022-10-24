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
    options: ["1.undefined, null, boolean, string, attributes, number, object", "2.undefined, null, boolean, string, symbols, number, object", "3.undefined, flurps , boolean, string, symbols, number, object", "4.undefined, null, boolean, string, attrributes, number, emojis"],
    answer: "2.undefined, null, boolean, string, symbols, number, object"
      
  },
  {
    prompt: "What is NaN property in JavaScript?",
    options: ["1.Not-a-Nugget", "2.Not-a-Neutral", "3.Not-a-Number", "4.none of the above"],
    answer: "3.Not-a-Number"
      
  },
  {
    prompt: "What company developed JavaScript?",
    options: ["1.NetScape", "2.AltaVista", "3.GeoCities", "4.GnatScape"],
    answer: "1.NetScape"
      
  },
  {
    prompt: "What is an undeclared variable?",
    options: ["1.variable that does not exist in a program and are not declared", "2.variables that are declared in the program but have not been given any value", "3. variables that want to remain nameless", "4.variables that exist in the program but are being quiet about it"],
    answer: "1.variable that does not exist in a program and are not declared"
      
  },
  {
    prompt: "What is an undefined variable?",
    options: ["1.crouching variable, hidden definition", "2.variables that are hipsters that are against labels", "3.variables that do not exist in a program and are not declared", "4.variables that are declared in the program but have not been given any value"],
    answer: "4.variables that are declared in the program but have not been given any value"
      
  },
  {
    prompt: "What is a prompt box?",
    options: ["1. A mailed mystery box for coders", "2. A box that allows the user to enter input by providing a text box", "3.A box that allows the user to get an answer in a timely fashion", "4.none of the above"],
    answer: "2.dumplings"
      
  },
  {
    prompt: "Which symbol is used for comments in JavaScript?",
    options: ["1.// for single line, /* */ for multi line comments", "2.<!-- --> for single line, <<!-- -->> for multi line comments", "3./* */ for single line, // for multi line comments", "4. || for single line, && for multi line comments"],
    answer: "1. // for single line, /* */ for multi line comments"
      
  },
  {
    prompt: "What does Null mean in JavaScript?",
    options: ["1.Not Under Loss Leader", "2. The value represents a value of an exceptional object", "3.The value represents no value or no object", "4.none of the above"],
    answer: "3.The value represents no value or no object"
      
  },
  {
    prompt: "What are all the types of Pop up boxes available in JavaScript?",
    options: ["1.Alert, Conform, and Prompt", "2.Poke, Stop, and Confirm", "3.Alert, Confirm, and Prompt", "4. Fast, Slow, and Somewhere in between"],
    answer: "3.Alert, Confirm, and Prompt"
      
  },
  {
    prompt: "What is Global Scope?",
    options: ["1.A variable declared within a JavaScript function", "2.A variable declared outside a function", "3.A scope used by PitBull AKA 'Mr. Worldwide'", "4.none of the above"],
    answer: "2. A variable declared outside a function"
      
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



function quizEnd() {
  clearInterval(timerId);
  var endScreenEl = document.getElementById("ending");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("final-time");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}



function timerTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

// save scores to localStorage
function saveHighscore() {
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initials.split
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
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
