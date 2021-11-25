/*
Multiplikation von 1 bis 100
*/
function product() {
    let counter = 0;
    let produktAllerZahlen = 0; // 6

    while (counter <= 100) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }

    return produktAllerZahlen;
}
let ergebnis = product();
console.log(ergebnis);

function product2() {
    let counter = 0;
    let produktAllerZahlen = 0; // 6

    while (counter <= 200) {
        produktAllerZahlen = produktAllerZahlen + counter;
        counter = counter + 1;
    }

    return produktAllerZahlen;
}
let ergebnis2 = product2();
console.log(ergebnis2);