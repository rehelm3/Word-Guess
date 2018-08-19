function Letter(character, Guessed) {
    this.character = character;
    this.Guessed = Guessed;

    this.guessFunction = function() {
        if (this.Guessed == true) {
            console.log(`${this.character} has been guessed`);
            return true;
          }
          console.log(`${this.character} has not been guessed`);
          return false;
    };

    this.guessChecker = function(isCorrect) {
        if (isCorrect.character == this.character) {
            return true;
        };
    };


};

module.exports = Letter;