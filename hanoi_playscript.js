const HanoiGame = require('./hanoi_game').Game;
const readline = require('./hanoi_game').readline;
const reader = require('./hanoi_game').reader;


let bestgame = new HanoiGame();

function completionCallback() {
  console.log("Congrats! You won!");
  reader.question("Do you want to play again? (yes/no)", (answer) => {
    if (answer === 'yes') {
      let newGame = new HanoiGame();
      newGame.run(completionCallback.bind(this));
    } else {
      reader.close();
      console.log("Bye then.");
    }
  });
}

completionCallback();

bestgame.run(() => completionCallback());

// bestgame.run();
//construct an array of tower arrays
//until all of the plates are moved to a single tower in the correct order
  //get move from user
  //make move
