//Define array of words to choose from
var randomWordArr = ["snow leopard", "cheetah", "jaguars", "panther", "bengal tiger", "asiatic lion"];

//Choose a random word from the Array of words
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;

//Empty array to store guesses
var answerArray = [];


//Fill the answer array with _ for each letter
function startup() 
{
    for (var i = 0; 1 < randomWord.length; i++)
       { 
           console.log("word length")
        answerArray[i] = "_";
        }
        //put them in a string
        s = answerArray.join(" ");
        console.log("join")
        document.getElementById("answer").innerHTML = s;
        console.log(answer)
}

function Letter()
{
    //get the letter the user type
    var letter = document.getElementById("letter").value;
    //make sure we have a guess
    if(letter.length > 0)
        for (var i = 0; i < randomWord.length; i++)
        {
            //If guessed letter is in randomWord
            if (randomWord[i] === letter)
            {
                //Assign letter to array
                answerArray[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = "No of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    // if(count>5)
    // {
    //     document.getElementById("stat").innerHTML = "Come on - you should have guessed it by now."
    // }
