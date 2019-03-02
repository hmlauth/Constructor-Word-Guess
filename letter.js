
// Constructor function that will display underlying character or placeholder depending on whether or not the user has guessed the correct letter. 
function Letter(character) {
    // A string value to store the underlying character for the letter being guessed
    this.character = character,
    // A boolean value that stores whether that letter has been guessed yet
    // TRUE - If letter HAS BEEN guessed (correctly).
    // FALSE - If letter HAS NOT been guessed yet.
    this.guessed = false,
    // A function that returns the underlying character if the letter has been guessed, or a placeholder if the letter has not been guessed. 
    this.toString = function(character) {
        for (var i = 0; i < wordToMatch.length; i ++) {
            if (character === wordToMatch[i]) {
                letterArray[i] = character; 
                console.log("letterArray[i]: " + letterArray[i]);
                console.log("CORRECT GUESS!")
            } else if (character !== wordToMatch[i]) {
                letterArray[i] = (" _");
            }
                if (letterArray.join(" ") === wordToMatch) {
                    console.log(wordToMatch);
                    console.log("You won! Great job!");
                }
                // console.log("letterArray:  " + letterArray);

            }
            console.log("letterArray:  " + letterArray)
        return letterArray;
    }
    // A function that takes in a character as an argument and checks it against an underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkIfGuessed = function(letter) {
        for (var i = 0; i < wordToMatch.length; i++) {
            if (character === wordToMatch[i]) {
                guessed = true;
            }
        }
    }
}


module.exports = Letter;