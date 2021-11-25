function product(){
    let numbers = 0;
    let allNumbers = 0;
    while(numbers<=100){
        allNumbers = allNumbers + numbers;
        numbers = numbers +1; 
       
    }
    return allNumbers;
}

let ergebnis =product();
console.log(ergebnis);

function product2(){
    let numbers = 0;
    let allNumbers = 0;
    while(numbers<= 50){
        allNumbers = allNumbers +  numbers;
        numbers = numbers + 1;
    }
    return allNumbers;
}
let ergebnis2 = product2();
console.log(ergebnis2);
