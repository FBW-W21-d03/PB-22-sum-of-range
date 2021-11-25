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




function product2(counter, range2) {
    let produktAllerZahlen = 0;
    while (counter <= range2) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }
    return produktAllerZahlen;
}


let ergebniszwei = product2(100, 500);

console.log(ergebniszwei);