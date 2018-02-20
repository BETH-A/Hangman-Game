//VARIABLES

//Object = try to guess the letters that make up each word
var word = ["snow leopard", "cheetah", "jaguars", "panther", "bengal tiger", "asiatic lion"];


//Possible letters to guess
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var wins = 0;
var loss = 0;
var wrongLetter = [" "];
var guessesLeft;
var underScores = [];
var userGuesses = [];
var randWord = word[Math.floor(Math.random() * word.length)];
var randWordLength = randWord.length;
var winCounter = 0;


//FUNCTIONS

//Pick random word from word array
 console.log("hi");

function startGame(){
    
    console.log("random Word = " + randWord + " length = " + randWordLength + " ");
    
    for(var i = 0; i <randWordLength; i++) {
        underScores.push("_");
       console.log(randWord);
    }
//Show '_' for each letter to be represented in the word
document.getElementById("word-blanks").textContent = underScores.join(" _ ");
 console.log("word-blanks");

//Compare letter picked to word to be guessed

wrongLetter = [];
guessesLeft = 10;

//If the letter is in the word, display letter

document.getElementById("guesses-left").textContent = guessesLeft;
        }

        function winLose()
        {

            if(winCounter === randWord.length)
            {
                alert("Congratulations! You won!");
                //console.log(underScores)
                console.log(i=randWordLength)
                
                
            }
            
            else if(guessesLeft === 0)
            {
                document.getElementById("guesses-left").textContent = guessesLeft;
                alert("I can't believe you couldn't guess the word! You lose.");
              //  startGame();
            
            
            }
        }
// document.onkeyup = function (event) {

// }
//If the letter is not in the word, display in bad guesses array

document.onkeyup = function(event)
        {
            userGuesses = event.key;
            
            
           
           if(randWord.indexOf(userGuesses) > -1)
           {
                for (var i = 0; i < randWord.length; i++ ) {
    
                
                    if (randWord[i] === userGuesses) {
                  
                    underScores[i] = userGuesses;
                    document.getElementById("word-blanks").textContent = underScores.join(" ");
                    console.log(underScores);
                    winCounter++;
                    winLose();
                    } 
                }       
           }
           else
           {
               wrongLetter.push(userGuesses);

               document.getElementById("wrong-guesses").textContent = wrongLetter;
               guessesLeft = guessesLeft - 1;
               document.getElementById("guesses-left").textContent = guessesLeft;
               console.log(wrongLetter);
               winLose();    
           }
        }

        startGame();