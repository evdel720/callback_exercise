'use strict'

const HanoiGame = require('./hanoi_game');

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let bestgame = new HanoiGame();

function completionCallback(reader) {
  console.log("Congrats! You won!");
  reader.question("Do you want to play again? (yes/no)", (answer) => {
    if (answer === 'yes') {
      let newGame = new HanoiGame();
      newGame.run(reader, completionCallback);
    } else {
      console.log("Bye then.");
      reader.close();
    }
  });
}

// completionCallback();

bestgame.run(reader, completionCallback);

// bestgame.run();
//construct an array of tower arrays
//until all of the plates are moved to a single tower in the correct order
  //get move from user
  //make move
