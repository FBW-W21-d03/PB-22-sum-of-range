function hundert() {
    let number=1;
    let results=0;
    while (number<=100) {
        results=results+number;
        number++;
    }
    return results;
}
let meinresults=hundert();
console.log (meinresults);