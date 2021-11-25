
function bis100() {
    let counterStart = 0;
    let sum = 0;

    while (counterStart <= 100) {
        sum = sum + counterStart;
        counterStart++;
    }

    return sum;
}

let ergebnis = bis100();

console.log("Aufgabe 1) ", ergebnis);



function fromToFunction(counterStart, endCount) {
    let sum = 0;
    while (counterStart <= endCount) {
        sum = sum + counterStart;
        counterStart++;
    }
    return sum;
}


let ergebnis2 = fromToFunction(100, 200);

console.log("Aufgabe 2) ", ergebnis2);
