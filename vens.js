//Aufgabenstellung - Teil 1
function product() {
    let counter = 0;
    let allZahlen = 0;

    while (counter <= 100) {
        allZahlen = allZahlen + counter;
        counter++;
    }
    return allZahlen;
}

let ergebnis = product();
console.log(ergebnis);

//Aufgabenstellung - Teil 2
function product2(counter, range) {
    let allZahlen = 0;
    while (counter <= range) {
        allZahlen = allZahlen + counter;
        counter++;
    }
    return allZahlen;
}

let ergebnis2 = product2(100, 200);
console.log(ergebnis2);