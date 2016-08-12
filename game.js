const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.stacks = [[3,2,1], [], []];
}

Game.prototype.promptMove = function(){
  console.log(this.stacks);
  reader.question("Select a tower to take a disc from (0,1,2)", (fromTower) => {
    reader.question("Select a tower to put the disc on (0,1,2)", (toTower) => {
      let fromTowerIndex = parseInt(fromTower);
      let toTowerIndex = parseInt(toTower);
      if(this.valid(fromTowerIndex, toTowerIndex)) {
        this.stacks[toTowerIndex].push(this.stacks[fromTowerIndex].pop());
      }
      if(this.win()) {
        reader.close();
        console.log("YOU ARE AN AWESOME WINNER AND A STAR");
        return;
      }
      this.promptMove();
    });
  });
};

Game.prototype.valid = function(fromTowerIndex, toTowerIndex) {
  let toLength = this.stacks[toTowerIndex].length;
  let fromLength = this.stacks[fromTowerIndex].length;
  if(toLength === 0) {
    return true;
  } else if (toLength > 0 && fromLength > 0 &&
    this.stacks[fromTowerIndex][fromLength - 1] < this.stacks[toTowerIndex][toLength - 1]
  ) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.win = function () {
  if(this.stacks[1].length === 3 || this.stacks[2].length === 3) {
    return true;
  }
  return false;
};

module.exports = Game;
