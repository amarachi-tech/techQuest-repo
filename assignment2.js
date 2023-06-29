// //creatinting a function to check for a palidrome
let reversed = (word) =>{

const { count } = require("console")

    return word === word.split("").reverse().join("");
}
console.log("Is Palindrome? : " + reversed("noon"));

//2. a function to count number of vowels except "y"
function countNumberOfVowel(str){
    //initialize two varables, counter and vowel
    let vowel = "aeoiu"
    let count = 0;
    //LOOP THROUGH THE PARAMETER str
    for(i = 0; i <str.length; i++){
        //check if each index of the str containts vowel
        if(vowel.indexOf(str[i]) !== -1){
            count++
        }
    }
    return count;
}
console.log(countNumberOfVowel("how are you"))

//3. function to checks a type of an argument
function typeOfArgs(arg){
    return typeof arg
}
const person =[{"name": "joe", "age": 15, "sex": "female"}]
console.log(typeOfArgs(person))

//4. program to count the number of string occurance
function numberOfOcurrance(item, str){
    //use split method
      
      const count = (item.split(str).length - 1) // -1 sxplicitly tells the system to exclude the letter you'd be searching for
  
      return count;
  }
  
  console.log(numberOfOcurrance("moon", "n"))