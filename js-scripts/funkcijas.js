//funkcija ar vienu parametru

function printName(firstName) {
    console.log(firstName)
}
//funkcijas izsaukums ar vienu argumentu

printName("Jānis"); 

// konsole skaitļus 1 līdz 10

function printNumber(firstNumber, secondNumber){
    for(let i=firstNumber; i <= secondNumber; i++){
        console.log(i)
    }
}

printNumber(4,8);