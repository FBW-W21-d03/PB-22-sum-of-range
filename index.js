function ausgabe() {
    let zahlen = 1;
    let alleZahlen = 1; 

    while (ausgabe < 100) {
        alleZahlen = alleZahlen + zahlen;
        zahlen = zahlen + 1;
    }

    return alleZahlen;
}
let ergebnis = ausgabe();
console.log("summe");