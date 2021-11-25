
// AUFGABE TEIL-1
function product() {
    let counter = 0;
    let summe = 0;
    

while(counter <= 100) {
    summe = summe + counter;
     counter = counter +1;

}

return summe;
}

let ergebnis = product();
console.log(ergebnis);


// AUFGABE TEIL-2
function produkt2(number){
    let counter2= 0;
    let summe2 = 0;
    
    while (counter2 <= number) {
      summe2 = summe2 + counter2;
      counter2 = counter2 +1;
        
    }
    return summe2;

}
let ergebnis2 = produkt2(250);
console.log(ergebnis2);