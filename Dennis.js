console.log("sum-of-range");



// Aufgabenstellung - Teil 1
function product() {
  let counter = 1;
  let produktAllerZahlen = 1; 

  while (counter <= 100) {
    produktAllerZahlen = produktAllerZahlen * counter;
    counter = counter + 1;
  }

  return produktAllerZahlen;
}
let ergebnis = product();
console.log(ergebnis);

// Aufgabenstellung - Teil 2


function produkt1(number){
    let counter1= 0;
    let summe = 0;
    
    while (counter1 <= number) {
      summe = summe + counter1;
      counter1 = counter1+1;
        
    }
    return summe;

}
let ergebnis1 = produkt1(250);
console.log(ergebnis1);




// Habe mir das Ergebnis aus dem slack kanal und github geholt.
