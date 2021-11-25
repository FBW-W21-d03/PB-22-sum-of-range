function product() {
    let counter = 0;
    let summe = 0;

    while (counter <= 100) {
        summe= summe + counter;
        counter = counter + 1;
    }
    return summe;
}
let ergebnis = product();
console.log(ergebnis);

function product2(a,b) {
    let counter = 0;
    let summe = 0;

    while (counter <= b-a){
        summe= summe + counter;
        counter = counter + 1;
    }
    return summe;
}
let ergebnis2 = product2(100,200);
console.log(ergebnis2);


