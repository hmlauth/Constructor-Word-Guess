// var inquirer = require('inquirer');
// var Word = require("./word.js");
var Letter = require("./letter.js");

// inquirer
//   .prompt([
    
//     type: "confirm",
//     message: "Guess a letter!",
//     name: "confirm-letter",
//     validate = function() {

//     }
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });

var wordBank = ["Hola","Hello"];

var wordToMatch = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(wordToMatch);

var letterArray = [];


var newLetter = new Letter("l");
console.log(newLetter);
newLetter.toString("l");
