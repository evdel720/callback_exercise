const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.stacks = [[3,2,1], [], []];
}

Game.prototype.promptMove = function(){
  reader
}

//export Game class
