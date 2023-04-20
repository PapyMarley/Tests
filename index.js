const {Game, EASY, MEDIUM, HARD} = require("./game.js")

let hangmanGame = new Game();
console.log ("Choississez une difficulté parmi 'EASY', 'MEDIUM et 'HARD' : ");
hangmanGame.setDifficulty(MEDIUM);
hangmanGame.getDifficulty();
console.log(hangmanGame.getDifficulty());