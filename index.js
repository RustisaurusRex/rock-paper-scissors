console.log ("Hello world!")

//Assign rock = 1, paper = 2, scissors = 3

//Create a function named getComputerChoice to have the computer randomly choose a number between 1-3 and store it in getComputerChoice.
function getComputerChoice() {
    let value = Math.floor(Math.random() *3 +1);
    console.log (value);
    switch (value) {
    case 1: choice = "rock";
    break;
    case 2: choice = "moo";
    break;
    case 3: choice = "oink";
    break;
}
    return choice
}
console.log (getComputerChoice())
//prompt for user input to select rock, paper, or scissors.
//store user input in variable