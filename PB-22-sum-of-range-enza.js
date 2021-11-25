/*
Addition von 1 bis 100
*/

//Aufgabenstellung - Teil 1
function summe() {
    let counter = 1;
    let summeAllerZahlen = 1;

    
    while (counter <= 100) {
        summeAllerZahlen = summeAllerZahlen + counter;
        counter = counter + 1;
    }

    return summeAllerZahlen;
}
let ergebnis = summe();
console.log(ergebnis);

// summe:5051

//Aufgabenstellung - Teil 2
function summe2(var1 , var2) {
    let counter = var1;
    let summeAllerZahlen = 1;

    
    while (counter <= var2) {
        summeAllerZahlen = summeAllerZahlen + counter;
        counter = counter + 1;
    }

    return summeAllerZahlen;
}
let ergebnis2 = summe2(0,233);
console.log(ergebnis2);

