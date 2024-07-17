console.log ("Hello world!")

//Create a function named getComputerChoice to have the computer randomly choose a number between 1-3
//Assign 1=rock, 2=paper, 3=scissors
//Store the result in getComputerChoice
function getComputerChoice() {
    let cvalue = Math.floor(Math.random() *3 +1);
    console.log (cvalue);
switch (cvalue) {
    case 1: cchoice = "rock";
    break;
    case 2: cchoice = "paper";
    break;
    case 3: cchoice = "scissors";
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
    case 1: hchoice = "rock";
    break;
    case 2: hchoice = "paper";
    break;
    case 3: hchoice = "scissors";
    break;
    default: alert ("Read the instructions and try again."), getHumanChoice();
}
return hchoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log (humanSelection,computerSelection);

function playRound (humanChoice, computerChoice) {
    if(humanChoice==computerChoice) {alert ("draw")}
        else if ((humanChoice == "rock" && computerChoice !=="paper") || (humanChoice=="paper" && computerChoice !=="scissors") || (humanChoice=="scissors" && computerChoice !== "rock")) {
        alert ("winner!- "+ humanChoice+" beats "+computerChoice)
    } else alert ("loser- "+computerChoice+" beats "+humanChoice)
  }

  playRound (humanSelection,computerSelection);