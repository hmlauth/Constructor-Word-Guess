var inquirer = require('inquirer');

// **** use .toString() function.

// Constructor function that will display underlying character or placeholder depending on whether or not the user has guessed the correct letter. 
function Letter(letterToMatch) {
    // A string value to store the underlying character for the letter being guessed
    this.letterToMatch = "h",
    // A boolean value that stores whether that letter has been guessed yet
    // TRUE - If letter HAS BEEN guessed (correctly).
    // FALSE - If letter HAS NOT been guessed yet.
    this.foundLetter = false,
    // A function that returns the underlying character if the letter has been guessed, or a placeholder if the letter has not been guessed. 
    this.displayCorrectLetter = function(letterToMatch) {
        var guessedWord = [];
        for (var i = 0; i < wordToMatch.length; i ++) {
            if (letterToMatch === wordToMatch[i]) {
                guessedWord[i] = letterToMatch; 
            } else if (letterToMatch !== wordToMatch[i]) {
                guessedWord[i] = (" _");
            }
                if (guessedWord.toString() === wordToMatch) {
                    console.log(wordToMatch);
                    console.log("You won! Great job!");
                }

        }
    }
    // A function that takes in a character as an argument and checks it against an underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkForLetter = function(letter) {
        for (var i = 0; i < wordToMatch.length; i++) {
            if (letterToMatch === wordToMatch[i]) {
                foundLetter = true;
            }
        }
    }
}

module.exports = Letter;