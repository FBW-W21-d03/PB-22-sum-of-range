/*
function ausgabe() {
    let zahlen = 0;
    let alleZahlen = 1; 

    while (ausgabe <= 100) {
        alleZahlen = alleZahlen + zahlen;
        zahlen = zahlen + 1;
    }

    return alleZahlen;
}
let ausgabe = ausgabe();
console.log("summe");
*/

function product() {
    let counter = 0;
    let produktAllerZahlen = 1;

    while (counter <= 100) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }

    return produktAllerZahlen;
}
let ergebnis = product();
console.log(ergebnis);

//----------------------
function product1() {
    let counter = 1;
    let produktAllerZahlen = 1; 

    while (counter <= 500) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }

    return produktAllerZahlen;
}
let ergebnis1 = product1();
console.log(ergebnis1);