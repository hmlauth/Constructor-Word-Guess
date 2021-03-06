var inquirer = require("inquirer");

// GLOBAL VARIABLES
var wordBank = ["Hello"];
var wordToMatch = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(wordToMatch);

var wordToMatchLength = wordToMatch.length;

var letterArray = [];

// Create placeholders with dashes for length of wordToMatch
var dash = " _";
var userword;
userword = dash.repeat(wordToMatchLength);
console.log(userword);

// FUNCTIONS

// Constructor function that will display underlying character or placeholder depending on whether or not the user has guessed the correct letter. 
function Letter(character) {
    // A string value to store the underlying character for the letter being guessed
    this.character = character,
        // A boolean value that stores whether that letter has been guessed yet
        // TRUE - If letter HAS BEEN guessed (correctly).
        // FALSE - If letter HAS NOT been guessed yet.
        this.guessed = false,
        // A function that returns the underlying character if the letter has been guessed, or a placeholder if the letter has not been guessed. 
        this.toString = function (character) {
            for (var i = 0; i < wordToMatch.length; i++) {
                if (character === wordToMatch[i]) {
                    letterArray[i] = character;
                    console.log(letterArray);
                    console.log(letterArray.join(""));
                    console.log(wordToMatch);
                // else if letterArray is not equal to wordToMatch, run inquirer again 
                }  
                
            }
    
            if (letterArray[i] !== wordToMatch) {
                promptInquiry();
            }
        }
    // A function that takes in a character as an argument and checks it against an underlying character, updating the stored boolean value to true if it was guessed cor // this.checkIfGuessed = function(letter) {
    //     for (var i = 0; i < wordToMatch.length; i++) {
    //         if (character === wordToMatch[i]) {
    //             guessed = true;
    //         }
    //     }
    // }rectly

}

function promptInquiry() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "userGuess"
            }
        ])
        .then(answers => {
            var newLetter = new Letter();
            if (letterArray.join("") === wordToMatch) {
                console.log("You won! Great job!");
            } else {
                newLetter.toString(answers.userGuess);
            }
        })
}

// METHODS
promptInquiry();

module.exports = Letter;