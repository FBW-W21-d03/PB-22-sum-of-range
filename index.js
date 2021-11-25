// Aufgabe: 1


function summeAlleZahlen() {
    let number = 0;
    let summeNumber = 0;
    while (number <= 100) {
        summeNumber = summeNumber + number;
        number = number +1;
    }
    return summeNumber;
 
 }
 let total = summeAlleZahlen();
 console.log(total);



// Aufgabe: 2


function summeAlleZahlen2(zahl) {
   let number2 = 0;
   let summeNumber2 = 0;
   while (number2 <= zahl) {
       summeNumber2 = summeNumber2 + number2;
       number2 = number2 +1;
   }
   return summeNumber2;

}
let total2 = summeAlleZahlen2(300);
console.log(total2);