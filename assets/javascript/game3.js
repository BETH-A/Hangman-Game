//VARIABLES

//Object = try to guess the letters that make up each word
var word = ["leopard", "cheetah", "jaguars", "panther", "tiger", "lion"];

//Possible letters to guess
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var badGuess = [" "];
var userGuesses = [];
var guessesRemaining;
var dashes = [];
var randomWord = word[Math.floor(Math.random() * word.length)];
var randomWordLength = randomWord.length;
var winCounter = 0;
// var wins = 0;
// var loss = 0;

//FUNCTIONS

//Pick random word from word array
console.log("hi");

function startGame() {

    console.log("random Word = " + randomWord + " length = " + randomWordLength + " ");

    for (var i = 0; i < randomWordLength; i++) {
        dashes.push("_");
        console.log(randomWord);
    }
    //Show '_' for each letter to be represented in the word
    document.getElementById("blanks").textContent = dashes.join(" ");
    console.log("blanks");

    //Compare letter picked to word to be guessed

    badGuess = [];
    guessesRemaining = 7;

    //If the letter is in the word, display letter

    document.getElementById("guessesRemaining").textContent = guessesRemaining;
}

function winLose() {

    if (winCounter === randomWord.length) {
        alert("Congratulations! You won!");
        //console.log(dashes)
        console.log(i = randomWordLength)


    } else if (guessesRemaining === 0) {
        document.getElementById("guessesRemaining").textContent = guessesRemaining;
        alert("I can't believe you couldn't guess the word, " + randomWord + "! You lose.");
    }
}
//If the letter is not in the word, display in bad guesses array

document.onkeyup = function (event) {
    userGuesses = event.key;

    if (randomWord.indexOf(userGuesses) > -1) {
        for (var i = 0; i < randomWord.length; i++) {

            if (randomWord[i] === userGuesses) {

                dashes[i] = userGuesses;
                document.getElementById("blanks").textContent = dashes.join(" ");
                // console.log(dashes);
                winCounter++;
                winLose();
            }
        }
    } else {
        if (badGuess.indexOf(userGuesses) === -1) {
            badGuess.push(userGuesses);

            document.getElementById("wrong-guesses").textContent = badGuess

            guessesRemaining = guessesRemaining - 1;
            document.getElementById("guessesRemaining").textContent = guessesRemaining;
            console.log(badGuess);
            winLose();
        }
    }
}

startGame();