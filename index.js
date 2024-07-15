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
console.log (getComputerChoice());
//Create a function named getHumanChoice to prompt for user input to select rock, paper, or scissors.
//store user input in getHumanChoice
function getHumanChoice(){
let hvalue = parseInt (prompt ("Choose your weapon: Enter 1 for 'Rock'. Enter 2 for 'Paper'. Enter 3 for 'Scissors'."));
switch (hvalue) {
    case 1: hchoice = "rock";
    break;
    case 2: hchoice = "paper";
    break;
    case 3: hchoice = "scissors";
    break;
}
if (hvalue = 3) {alert ("oink")} else {alert ("moo")};
}
console.log (getHumanChoice())