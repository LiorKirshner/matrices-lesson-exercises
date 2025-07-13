class Matrix {
  constructor(rowNum, colNum = rowNum) {
    this.Matrix = this.generateMatrix(rowNum, colNum);
  }

  generateMatrix(rowNum, colNum) {
    let mat = [];
    let count = 1;
    for (let r = 0; r < rowNum; r++) {
      const row = [];
      for (let c = 0; c < colNum; c++) {
        row.push(count++);
        mat[r] = row;
      }
    }
    return mat;
  }

  print_mat() {
    for (let i = 0; i < this.Matrix.length; i++) {
      let print = "";
      for (let j = 0; j < this.Matrix[0].length; j++) {
        print = print + "\t" + this.Matrix[i][j];
      }
      console.log(print);
    }
  }
  get(rowNum, colNum) {
    return this.Matrix[rowNum][colNum];
  }
  printRow(rowNum) {
    let print = "";
    for (let c = 0; c < this.Matrix.length; c++)
      print = print + "\t" + this.Matrix[rowNum][c];
    console.log(print);
  }
  printColumn(colNum) {
    let print = "";
    for (let r = 0; r < this.Matrix[0].length; r++)
      print = print + "\t" + this.Matrix[r][colNum];
    console.log(print);
  }
  alter(rowNum, colNum, value) {
    this.Matrix[rowNum][colNum] = value;
  }
  findCoordinate(value) {
    for (let r = 0; r < this.Matrix.length; r++) {
      for (let c = 0; c < this.Matrix[0].length; c++) {
        if (this.Matrix[r][c] == value) return { x: r, y: c };
      }
    }
  }
}

//You can paste the code from the lesson below to test your solution
let mat4 = new Matrix(4);
console.log(mat4);
mat4.print_mat(mat4.Matrix);
console.log(mat4.get(1, 1));
let m = new Matrix(3, 4);
m.print_mat();
console.log(m.findCoordinate(12)); //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)); //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix;
