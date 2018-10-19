// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("button").click(function(){
    var userChoice = $("input").val();
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
});

var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;
var userScore = 0;
var computerScore = 0;

