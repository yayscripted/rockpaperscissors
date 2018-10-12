// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("button").click(function(){
    $("#userChoice").text($("#input").val());
});

var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

var userScore = 0;
var computerScore = 0;


