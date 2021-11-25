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
console.log("ergebnis=",ergebnis);

function product2(a,b){
    let numbers = a;
    let allNumbers = 0;
    while(numbers<= b){
        allNumbers = allNumbers +  numbers;
        numbers = numbers + 1;
    }
    return allNumbers;
}
let ergebnis2 = product2(100,200);
console.log("ergebnis = ",ergebnis2);
