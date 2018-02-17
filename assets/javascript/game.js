var words = ["snow leopard", "cheetah", "jaguars", "panther", "bengal tiger", "asiatic lion"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log("hi");
document.onkeyup = function(event) {
    console.log(event.key)
    var userGuess = event.key;
}
