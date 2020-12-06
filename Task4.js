function checkNunbers (num1,num2){
    if (num1 == 3 || num2 == 3 ) {
        let sum = num1 + num2;
        let stringSum = `${sum}`; //convert the sum into a string

        for (let i = 0; i < stringSum.length; i++){
            if (stringSum[i] == "3"){
                return true
            }
        }
    }
    return false
}