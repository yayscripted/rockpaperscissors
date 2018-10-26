// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;
var userScore = 0;
var computerScore = 0;



// DOCUMENT READY FUNCTION BELOW
$("button").click(function(){
    var userChoice = $("input").val().toLowerCase();
    $("#userChoice").text(userChoice);
    var randomNumber = Math.random();
    
    if ( .33 > randomNumber > 0) {
    computerChoice = "rock";
} else if(.66 > randomNumber > .33) {
    computerChoice = "paper";
} else if(1 > randomNumber > .66){
    computerChoice = "scissors";
}
    $("#computerChoice").text(computerChoice);
    
    if (computerChoice === "rock" && userChoice === "scissors") {
        var winner = "Computer wins!";
        computerScore = computerScore + 1;
        $("#result").text(winner);
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        var winner = "User wins!";
        userScore = userScore + 1;
        $("#result").text(winner);
    } else if (computerChoice === "paper" && userChoice === "rock") {
        var winner = "Computer wins!";
        computerScore = computerScore + 1;
        $("#result").text(winner);
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        var winner = "User wins!";
        userScore = userScore + 1;
        $("#result").text(winner);
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        var winner = "Computer wins!";
        computerScore = computerScore + 1;
        $("#result").text(winner);
    } else if (computerChoice === "rock" && userChoice === "paper") {
        var winner = "User wins!";
        userScore = userScore + 1;
        $("#result").text(winner);
    } else if(computerChoice === userChoice) {
        var winner = "Tie!";
        $("#result").text(winner);
    } else {
        var winner = "Not valid";
        $("#result").text(winner);
    }
    
    $("#userScore").text("Score: " + userScore);
    $("#computerScore").text("Score: " + computerScore);
    
    if (userScore >= 10) {
        alert("The user is the overall winner!");
    } else if (computerScore >= 10) {
        alert("The computer is the overall winner!");
    }
});


