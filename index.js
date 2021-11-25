function product() {
    let zahl     = 0;
    let zaehler  = 1;

    while (zahl <= 100) {
        zaehler  = zaehler + zahl;
        zahl     = zahl + 1;
    }
    return zaehler;
}

let ergebnis     = product();
console.log(ergebnis);

function product2(wert) {
    let zahl = 0;
    let zaehler = 1;

    while (zahl <= wert) {
        zaehler = zaehler + zahl;
        zahl = zahl + 1;
    }
    return zaehler;
}

let ergebnis2 = product2(777);
console.log(ergebnis2);