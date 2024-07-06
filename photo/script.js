
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  //show round result
  function hasPlayerWonTheRound(player, computer) {
     if (player === "Rock"  && computer === "Scissors"){
        myImage.src= "Default_a_rock_breaking_a_scissors_1.jpg";
    }else if (player === "Scissors" && computer === "Paper"){
        myImage.src = "Default_scissors_cutting_a_paper_0.jpg";
        return myImage
    }else if(player === "Paper" && computer === "Rock" ){
        myImage.src = "Default_a_paper_cover_a_rock_1.jpg";
    }else if (computer === "Rock" && player === "Scissors"){
        myImage.src= "Default_a_rock_breaking_a_scissors_1.jpg";
    }else if (computer === "Scissors" && player === "Paper"){
        myImage.src = "Default_scissors_cutting_a_paper_0.jpg";
    }else if(computer === "Paper" && player === "Rock"){
        myImage.src = "Default_a_paper_cover_a_rock_1.jpg";  
    }else if(player == "Rock"  || computer == "Rock"){
      myImage.src = "Default_Two_massive_boulders_one_rough_and_rugged_the_other_sm_1.jpg";
    }else if (player == "Scissors" || computer == "Scissors"){
      myImage.src = "Default_Two_pairs_of_scissors_one_sharp_and_sleek_the_other_du_1.jpg";
    }else if(player === "Paper" && computer === "Paper"){
      myImage.src= "Default_Two_pieces_of_paper_one_crumpled_and_the_other_smooth_0.jpg";
    }
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  //cotinued
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
    
     playerScore = 0;
     computerScore = 0;
     playerScoreSpanElement.innerText = playerScore;
     computerScoreSpanElement.innerText = computerScore;
     resetGameBtn.style.display = "none";
     optionsContainer.style.display = "block";
     winnerMsgElement.innerText = "";
     roundResultsMsg.innerText = ""
  };
  
  resetGameBtn.addEventListener("click", resetGame);
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });

var myImage = document.querySelector("#imageid");

