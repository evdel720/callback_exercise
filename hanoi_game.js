const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.stacks = [[1], [3, 2], []];
}

Game.prototype.promptMove = function(callback){
  this.print();
  reader.question("Select a tower to take a disc from (0,1,2)", (fromTower) => {
    reader.question("Select a tower to put the disc on (0,1,2)", (toTower) => {
      let fromTowerIndex = parseInt(fromTower);
      let toTowerIndex = parseInt(toTower);
      callback(fromTowerIndex, toTowerIndex);
    });
  });
};

Game.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
    return true;
  }
  return false;
};

Game.prototype.print = function() {
  console.log(this.stacks);
};

Game.prototype.isValidMove = function(fromTower, toTower) {
  let toLength = this.stacks[toTower].length;
  let fromLength = this.stacks[fromTower].length;
  if(toLength === 0) {
    return true;
  } else if (toLength > 0 && fromLength > 0 &&
    this.stacks[fromTower][fromLength - 1] < this.stacks[toTower][toLength - 1]
  ) {
    return true;
  }
  return false;
};

Game.prototype.isWon = function () {
  return this.stacks[1].length === 3 || this.stacks[2].length === 3;
};

Game.prototype.run = function(completionCallback) {
  this.promptMove((fromIdx, toIdx) => {
    if (!this.move(fromIdx, toIdx)) {
      console.log("Invalid move.");
    }
    if (this.isWon()) {
      reader.close();
      completionCallback();
    } else {
      this.run(completionCallback);
    }

  });
};
//
// let g = new Game();
// g.run(() => console.log("You win!"));

module.exports = { Game: Game, readline: readline, reader: reader };
