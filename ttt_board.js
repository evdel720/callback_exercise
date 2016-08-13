class Board {
  constructor() {
    this.grid = [];
    for (let i=0; i<3; i++) {
      let row = [];
      for (let j=0; j<3; j++) {
        row.push("_");
      }
      this.grid.push(row);
    }
  }

  display() {
    this.grid.forEach((row)=> console.log(row));
  }
}

let b = new Board();
// b.display();
// console.log(b.grid);
