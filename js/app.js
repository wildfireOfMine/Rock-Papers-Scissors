function playGame(){
    var humanScore = 0;
    var computerScore = 0; 
    for (let i = 0; i<5; i++) {
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
    
}

playGame();

function playRound(humanChoice, computerChoice) {
    const humanChoiceCS = humanChoice.toLowerCase();
    console.log(humanChoiceCS);
    console.log(computerChoice);
    let verdict = 0;
    if ((humanChoiceCS === "scissors" && computerChoice == "papers") || 
    (humanChoiceCS === "papers" && computerChoice == "rock") ||
    (humanChoiceCS === "rock" && computerChoice == "scissors")) {
        console.log(`YOU WIN! YOUR CHOICE: ${humanChoiceCS}. COMPUTER'S CHOICE: ${computerChoice}`);
    } else if ((computerChoice === "scissors" && humanChoiceCS == "papers") || 
    (computerChoice === "papers" && humanChoiceCS == "rock") ||
    (computerChoice === "rock" && humanChoiceCS == "scissors")) {
        verdict = 1;
        console.log(`YOU LOSE! YOUR CHOICE: ${humanChoiceCS}. COMPUTER'S CHOICE: ${computerChoice}`);
    } else {
        verdict = 2;
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

function getHumanChoice(){
    const getChoice = prompt("Choose your weapon");

    return getChoice;
}