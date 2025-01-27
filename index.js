console.log ("Hello world!")

//Create a function named getComputerChoice to have the computer randomly choose a number between 1-3
//Assign 1=rock, 2=paper, 3=scissors
//Store the result in getComputerChoice
function getComputerChoice() {
    let cvalue = Math.floor(Math.random() *3 +1);
    console.log (cvalue);
switch (cvalue) {
    case 1: cchoice = "Rock";
    break;
    case 2: cchoice = "Paper";
    break;
    case 3: cchoice = "Scissors";
    break;
}
    return cchoice;
}
//Create a function named getHumanChoice to prompt for user input to select rock, paper, or scissors.
//store user input in getHumanChoice
function getHumanChoice(){
let hvalue= parseInt (prompt ("Choose your weapon: Enter 1 for 'Rock'. Enter 2 for 'Paper'. Enter 3 for 'Scissors'."));
console.log (hvalue);
switch (hvalue) {
    case 1: hchoice = "Rock";
    break;
    case 2: hchoice = "Paper";
    break;
    case 3: hchoice = "Scissors";
    break;
    default: alert ("Read the instructions and try again."), getHumanChoice();
}
return hchoice;
}
//Declare initial score variables
let humanScore = 0;
let computerScore = 0;

//Construct function to house game so that it can be called in the iterative loop
function playGame() {

//Make reuslts from getHumanChoice function and getComputerChoice function acessible inside this function
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log (humanSelection,computerSelection);

//Build a function inside playGame to play one round and declare the winner's score
//Add score iteration
function playRound (humanChoice, computerChoice) {
    if(humanChoice==computerChoice) {alert ("draw")}
        else if ((humanChoice == "Rock" && computerChoice !=="Paper") || (humanChoice=="Paper" && computerChoice !=="Scissors") || (humanChoice=="Scissors" && computerChoice !== "Rock")) {
        alert ("Winner!- "+ humanChoice+" beats "+computerChoice+"."), (humanScore)++
    } else alert ("Loser- "+computerChoice+" beats "+humanChoice+"."), (computerScore)++;
}

//Play a single round using the human and computer selections
  playRound (humanSelection,computerSelection);
  return console.log ("human: "+humanScore+" | computer: "+computerScore);
}

//Have the playGame function repeat until the score threshold has been reached
for (let i = 0; humanScore < 5 && computerScore < 5; i++) {
    playGame();
}

