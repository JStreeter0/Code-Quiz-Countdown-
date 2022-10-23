// timer elements
var timerEl = document.querySelector(".timer");
var outOfTimeEl = document.querySelector("outOfTime");
// button elements
var highScoreButtonEl = document.querySelector(".gameScores");
var startGameButtonEl = document.querySelector("#startButton");
var submitScoreButtonEl = document.querySelector("#submitScore");
var returnButtonEl = document.querySelector("#returnToStart");
var clearScoresButtonEl = document.querySelector("#clearScores");
// page elements
var startingPageEl = document.querySelector(".Start-screen");
var quizPageEl = document.querySelector(".Quiz");
var resultsPageEl = document.querySelector(".Results");
var leaderboardEl = document.querySelector(".Leaderboard");
// quiz items
var questionsEl = document.querySelector("#Question");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var correctOrNah = document.querySelector("#Check");
// other variables
var correct = 0;
var questionNumber = 0;
var finalScore = 0;
var questionIndex = 0;
var timer = null;

// question prompts, choices, and answers
const questions = [
  {
    question: "What is the answer to life, the universe, and everything?",
    answers: ["1.dumplings", "2.rolling a nat 20", "3.peace of mind", "4.none of the above"],
    answer: "4.none of the above"
      
  },
  {
    question: "What is the answer to life, the universe, and everything?",
    answers: ["1.dumplings", "2.rolling a nat 20", "3.peace of mind", "4.none of the above"],
    answer: "3.peace of mind"
      
  },
  {
    question: "What is the answer to life, the universe, and everything?",
    answers: ["1.dumplings", "2.rolling a nat 20", "3.peace of mind", "4.none of the above"],
    answer: "2.rolling a nat 20"
      
  },
  {
    question: "What is the answer to life, the universe, and everything?",
    answers: ["1.dumplings", "2.rolling a nat 20", "3.peace of mind", "4.none of the above"],
    answer: "1.dumplings"
      
  }
];

// Event page load
function init(){
console.log("Game Loading...");
}
// event click start 
function startQuiz(ev){
console.log("Game started");  
}
startGameButtonEl.addEventListener("click", startQuiz);

// event timer tick
function timerTick(ev){
  console.log("timer counting!"); 
}
// event user answer 
function userInput() {
console.log("input answer");
}
questionsEl.addEventListener("click", userInput);

// event Game ends
function timeOut(){

}

// refactor
// Start the game 
init();

