
const rock = document.querySelector("#rock");
const papers = document.querySelector("#papers");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const humanScoreDiv = document.querySelector("#humanScore");
const computerScoreDiv = document.querySelector("#computerScore");
const ranking = document.querySelector("#ranking");
var humanScore = 0;
var computerScore = 0;
humanScoreDiv.innerHTML = humanScore;
computerScoreDiv.innerHTML = computerScore;


rock.addEventListener("click", e=>{
    const score = playRound("rock", getComputerChoice());
    result.innerHTML = "";
    result.append(score);
    humanScoreDiv.innerHTML = humanScore;
    computerScoreDiv.innerHTML = computerScore;
    if (humanScore === 5 || computerScore === 5) {
        winnerFunction();
    }
});

papers.addEventListener("click", e=>{
    const score = playRound("papers", getComputerChoice());
    result.innerHTML = "";
    result.append(score);
    humanScoreDiv.innerHTML = humanScore;
    computerScoreDiv.innerHTML = computerScore;
    if (humanScore === 5 || computerScore === 5) {
        winnerFunction();
    }
});

scissors.addEventListener("click", e=>{
    const score = playRound("scissors", getComputerChoice());
    result.innerHTML = "";
    result.append(score);
    humanScoreDiv.innerHTML = humanScore;
    computerScoreDiv.innerHTML = computerScore;
    if (humanScore === 5 || computerScore === 5) {
        winnerFunction();
    }
});

/* function playGame(){
 
    while (humanScore < 5 && computerScore < 5) {
        const verdict = playRound(getHumanChoice(), getComputerChoice());
        if (verdict === 0) {
            humanScore++;
        } else if (verdict === 1) {
            computerScore++;
        } else {
            console.log("TIE!");
        }
        console.log(`SCORES: ${humanScore} - ${computerScore}`);
    }
    
} */

function playRound(humanChoice, computerChoice) {
    const humanChoiceCS = humanChoice.toLowerCase();
    let verdict = "";
    if ((humanChoiceCS === "scissors" && computerChoice == "papers") || 
    (humanChoiceCS === "papers" && computerChoice == "rock") ||
    (humanChoiceCS === "rock" && computerChoice == "scissors")) {
        verdict = (`YOU WIN! YOUR CHOICE: ${humanChoiceCS}. COMPUTER'S CHOICE: ${computerChoice}`);
        humanScore++;
    } else if ((computerChoice === "scissors" && humanChoiceCS == "papers") || 
    (computerChoice === "papers" && humanChoiceCS == "rock") ||
    (computerChoice === "rock" && humanChoiceCS == "scissors")) {
        verdict = (`YOU LOSE! YOUR CHOICE: ${humanChoiceCS}. COMPUTER'S CHOICE: ${computerChoice}`);
        computerScore++;
    } else {
        verdict = "TIE";
    }

    return verdict;
}

function getComputerChoice(){
    const ranNum = Math.round(Math.random() * (3 - 1) + 1);
    let choice = "";

    if (ranNum === 1) {
        choice = "rock";
    } else if (ranNum === 2) {
        choice = "papers";
    } else {
        choice = "scissors";
    }

    return choice;
}

function winnerFunction(){
    if (humanScore == 5) {
        result.innerHTML += "<br> <strong>The human has won</strong>";
    } else if (computerScore == 5) {
        result.innerHTML += "<br> <strong>The computer has won</strong>";
    }
    const winner = document.createElement("li");
    winner.innerText = `Human = ${humanScore} - Computer = ${computerScore}`;
    ranking.appendChild(winner);
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.innerHTML = humanScore;
    computerScoreDiv.innerHTML = computerScore;
}

/* function getHumanChoice(){
    const getChoice = prompt("Choose your weapon");

    return getChoice;
} */