function sum() {
  let counter = 0;
  let result = 0;
  while (counter < 100) {
    counter++;
    result += counter;
    // console.log(counter, result);
  }
  return result;
}

console.log("Aufgabe 1:", sum());

// Aufgabe - Teil 2

function sumRange(min, max) {
  let counter = min;
  let result = 0;
  while (counter <= max) {
    result += counter;
    counter++;
    // console.log(counter, result);
  }
  return result;
}

let zahl = sumRange(0, 100);
console.log("Aufgabe 2:", zahl);

console.log("Aufgabe 2, kurz:", sumRange(0, 100));

console.log(sumRange(10, 11));
console.log("100 bis 200:", sumRange(100, 200));
