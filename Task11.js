function getCommonCharacters (string1, string2) {
    let commonCharacters = "";
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j]){
                commonCharacters = commonCharacters + string2[j];
            }
        }
    }
    console.log(commonCharacters)
}