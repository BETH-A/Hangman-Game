//VARIABLES

//Object = try to guess the letters that make up each word
var word = ["snow leopard", "cheetah", "jaguars", "panther", "bengal tiger", "asiatic lion"];

//Letters guessed
var guesses = [];

//# of guesses left to be subtracted by 1 each time a wrong letter is guessed
var guessesLeft = 7;

//Possible letters to guess
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];




//FUNCTIONS

//Pick random word from word array
var wordToGuess = word[Math.floor(Math.random() * word.length)];
console.log(word)



//Show '_' for each letter to be represented in the word

//Compare letter picked to word to be guessed
//If the letter is in the word, display letter
document.onkeyup = function (event) {

}
//If the letter is not in the word, display in bad guesses array

//Reduce # of guesses by 1 for each bad guess
//Only reduce # of guesses once, so if user guesses the same letter it does not cost them

function updateGuessesLeft() {
    document.querySelector("guessesLeft").textContent = "Guesses Left: ";
}
//When full word is guess, display "YOU WIN"

// If the word is not guessed within 7 guesses, display "YOU LOOSE"