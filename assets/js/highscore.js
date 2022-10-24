var scoresBtn = document.querySelector("#view-high-scores");

// input time score along with initials to the leaderboard 

function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
}

// button to clear all previous scores 
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  } document.getElementById("clear").onclick = clearHighscores;
  
printHighscores();