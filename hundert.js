// function hundert() {
//     let number=1;
//     let results=0;
//     while (number<=100) {
//         results=results+number;
//         number++;
//     }
//     return results;
// }
// let meinresults=hundert();
// console.log (meinresults);

console.log("--------------------------------------------------");
 function hundert(ersteZahl,zweitZahl) {

   let unu=ersteZahl;
       let doi=0;
        while (unu<=zweitZahl) {
           doi=doi+unu;
         unu++;
        }
        return unu;
 }
let unuplusdoi=hundert(100,200);
console.log(unuplusdoi);