console.log("Rock, Paper, Scissors game loaded.");

/* Step 1: Getting user input for rock, paper, or scissors */
function getUserChoice() {
    let input = prompt("Enter rock, paper, or scissors:");
    if (!input) return null; // user cancelled
    return input.toLowerCase();
}

/* Step 2: Getting computers choice for rock, paper, or scissors */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice];
}

/* Step 3: Determining the winner */
function determineWinner(userChoice, computerChoice) {
    console.log("User choice:", userChoice);
    console.log("Computer choice:", computerChoice);

    if (userChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win!");
        }
        else {
            console.log("Computer wins!");
        }
    }
    else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win!");
        }
        else {
            console.log("Computer wins!");
        }
    }
    else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win!");
        }
        else {
            console.log("Computer wins!");
        }
    }
}

computerChoice = getComputerChoice();
userChoice = getUserChoice();
determineWinner(userChoice, computerChoice);