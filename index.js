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
console.log(ergebnis);



function productzwei(wert, wert) {
    let zahl = 0;
    let counter = 1;

    while (zahl <= wert) {
        counter = counter + zahl;
        zahl = zahl + 1;
    }
    return counter;
}

let ergebniszwei = productzwei(777, 500);
console.log(ergebniszwei);

