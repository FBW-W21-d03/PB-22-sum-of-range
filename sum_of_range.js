/*
Multiplikation von 1 bis 100
*/

function product() {
    let counter = 0;
    let produktAllerZahlen = 0;

    while (counter <= 100) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }

    return produktAllerZahlen;
}

let ergebnis = product();

console.log("Aufgabe 1) ", ergebnis);


function product2(counter, range2) {
    let produktAllerZahlen = 0;
    while (counter <= range2) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }
    return produktAllerZahlen;
}


let ergebnis2 = product2(100, 500);

console.log("Aufgabe 2) ", ergebnis2);
