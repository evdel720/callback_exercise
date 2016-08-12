const HanoiGame = require('./game');


HanoiGame.prototype.run = function() {
  this.promptMove();
};

let bestgame = new HanoiGame();
bestgame.run();
//construct an array of tower arrays
//until all of the plates are moved to a single tower in the correct order
  //get move from user
  //make move
