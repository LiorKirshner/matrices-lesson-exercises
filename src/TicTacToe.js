const Matrix = require("./Matrix");

class TicTacToe extends Matrix {
  constructor() {
    super(3, 3);
    this.Matrix = this.loadBoard();
  }
  loadBoard() {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        this.alter(r, c, ".");
      }
    }
    return this.Matrix;
  }
  play(rowNum, colNum, player) {
    const symbol = player === 1 ? "X" : "O";
    this.alter(rowNum, colNum, symbol);
    this.checkWin(symbol);
  }
  checkWin(symbol) {
    for (let c = 0; c < 3; c++) {
      if (
        this.Matrix[0][c] === symbol &&
        this.Matrix[1][c] === symbol &&
        this.Matrix[2][c] === symbol
      ) {
        console.log(`${symbol} wins in column ${c}`);
      }
    }
  }
}

let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1); //prints Congratulations Player 1

board.print();
/*prints
o       .       x
o       .       x
.       .       x
*/
