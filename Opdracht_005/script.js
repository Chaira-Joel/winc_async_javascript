//functie 1 
function sum(...numbers){
return numbers.reduce((previousValue, currentValue) => previousValue + currentValue
);
}

const numArray = [1,5,88,6];
console.log(sum(...numArray));

//functie 2
function sumSecond(...numbers){
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue
    );
    }
    
    const numArrayTwo = [1,5,88,6];
    console.log(sum(...numArrayTwo));