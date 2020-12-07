function sumOfMultiples () {
    let numbersArray = [];
    let sum = 0;

    for (let i = 1; i < 1001; i++){
        numbersArray.push(i)
    }
    for (let j = 0; j < numbersArray.length; j++){
        if ((numbersArray[j] % 3 == 0) || (numbersArray[j] % 5 == 0)){
            sum = sum + numbersArray[j];
        }    
    }
    return sum
}