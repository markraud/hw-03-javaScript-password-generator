// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    
    //passwordText.value = password;

    var passwordLength = prompt("Please enter the number of characters for your password.");
    var lowerConfirm = confirm("Do you want lowercase characters?");
    var upperConfirm = confirm("Do you want uppercase characters?");
    var numericConfirm = confirm("Do you want numeric characters?");
    var specialConfirm = confirm("Do you want special characters?");

    var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
      "y", "z"];
    var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
     "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z"];
    var numChar = ["0","1","2","3","4","5","6","7","8","9",];
    var specChar = ["!", "\"", "#", "$", "%","&", "\'","(",")", "*","+",
    ",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`",
    "{","|","}","~"];
    
    var chosenChar = [];

    //console.log(lowerChar);   
    //console.log(upperChar);   
    //console.log(numChar);   
    //console.log(specChar);   


    if (lowerConfirm == false && upperConfirm == false 
        && numericConfirm == false && specialConfirm == false) {
        alert("Please try again and choose at least 1 character type.");
    }   else if (lowerConfirm == true){
        chosenChar = chosenChar.concat(lowerChar);
    }

    if (upperConfirm == true){
        chosenChar = chosenChar.concat(upperChar);
    }
    
    if (numericConfirm == true){
        chosenChar = chosenChar.concat(numChar);
    }
    
    if (specialConfirm == true){
        chosenChar = chosenChar.concat(specChar);
    }

    
    console.log(chosenChar);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


writePassword();