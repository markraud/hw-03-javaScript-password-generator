// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

function generatePassword() {
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
    
    var guaranteeChar = [];

    var chosenChar = [];
    var userPassword = [];
    

    if (lowerConfirm == false && upperConfirm == false 
        && numericConfirm == false && specialConfirm == false) {
        alert("Please try again and choose at least 1 character type.");
        return;
    }   else if (lowerConfirm == true){
        chosenChar = chosenChar.concat(lowerChar);
        guaranteeChar = guaranteeChar.push(Math.floor(lowerChar[Math.random()*lowerChar.length]));  //trying to generate a random lowerChar that will be added to the userPassword
        console.log(guaranteeChar);                                                                 //then would
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
    
    //for loop to loop over password length and grab random character from the chosenChar array
    for (i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * chosenChar.length);
        userPassword.push(chosenChar[randomIndex]);
        console.log(userPassword);
    } 
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


