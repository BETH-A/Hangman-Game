var word = ["snow leopard", "cheetah", "jaguars", "panther", "bengal tiger", "asiatic lion"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var userGuess = [];
var wordToDisplay = "";

var wtgID = document.getElementById(word);

console.log("hi");
    var userGuess = word.key;

    for (var i = 0; i < word.length; i++) {
document.onkeyup = function (event) {
    console.log(event.key)
        var currentLetter = word.charAt(i);
        // Check the letters
        // If matches in the word, add to wordToDisplay
        if (userGuess.indexOf(currentLetter) > -1) {
            console.log("Match");
            wordToDisplay = wordToDisplay + currentLetter + " ";
        } else {
            // No match, add '_' to wordToDisplay
            wordToDisplay = wordToDisplay + "_";
        }
        console.log(wordToDisplay)
    }

    updateDisplay(wordToDisplay);

    function updateDisplay(newWord) {
        wtgId.innerText = newWord;
    }

}