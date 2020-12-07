function getVowels (string) {
    string = string.toLowerCase();
    let vowels = ""

    for (let i = 0; i < string.length; i++) {
       switch (string[i]) {
           case "a" :
               vowels = vowels + "a";
               break;
           case "e" :
               vowels = vowels + "e";
               break;
           case "i" :
               vowels = vowels + "i";
               break;
           case "o" :
               vowels = vowels + "o";
               break;
           case "u" :
               vowels = vowels + "u";
               break;
       }
    }
   return console.log(vowels)
}