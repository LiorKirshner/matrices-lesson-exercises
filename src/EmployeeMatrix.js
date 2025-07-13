/* Write your code below */
const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix {
  loadData(salaryData) {
    this.Matrix = salaryData.map((obj) => Object.values(obj));
  }
  getEmployees(department) {
    return this.Matrix.filter((row) => row[2] == department).map(
      (row) => row[1]
    );
  }
  getTotalSalary(department) {
    return this.Matrix.filter((row) => row[2] == department).reduce(
      (sum, row) => sum + row[3],
      0
    );
  }
  findRichest() {
    let maxRow = this.Matrix[0];

    for (let i = 1; i < this.Matrix.length; i++) {
      if (this.Matrix[i][3] > maxRow[3] && this.Matrix[i][2]) {
        maxRow = this.Matrix[i];
      }
    }

    return maxRow[1]; // name
  }
}
//You can paste the code from the lesson below to test your solution
let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
//m.print();
console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
console.log(m.findRichest()); //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix;
