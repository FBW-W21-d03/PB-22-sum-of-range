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




function productzwei() {
    let counter = 1;
    let zahl= 0;
    while (counter <= zahl) {
        zahl = zahl + counter;
        counter = counter + 1;
    }
    return zahl;
}


let ergebniszwei = productzwei(150, 200);

console.log(ergebniszwei);