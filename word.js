var Letter = require("./letter.js");

function Word( ) {
    this.wordArray = [];

    this.addLetter = function(character, Guessed) {
        this.wordArray.push(new Letter(character, Guessed));
      };
    
    this.letterCount = function() {
        return this.wordArray.length;
    };
};

var a = new Letter('a', true);

a.guessFunction();


module.exports = Word;