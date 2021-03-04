// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters for your password(between 8 and 128).");
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength =  prompt("That is not a valid number. Please enter a number between 8 - 128.");
        }

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
    

    if (lowerConfirm == false && upperConfirm == false   //checking for at least one character type
        && numericConfirm == false && specialConfirm == false) {
        alert("Please try again and choose at least 1 character type.");
        return;
    }   else if (lowerConfirm == true){
        chosenChar = chosenChar.concat(lowerChar);  //adding lowercase charaters to the overall array
        
        //trying to generate a random lowerChar that will be added to the userPassword to guarantee at least 1 lowercase
        //guaranteeChar = guaranteeChar.push(Math.floor(lowerChar[Math.random()*lowerChar.length]));  
        //console.log(guaranteeChar);                                                                 
    }

    if (upperConfirm == true){
        chosenChar = chosenChar.concat(upperChar);  //adding uppercase charaters to the overall array
    }
    
    if (numericConfirm == true){
        chosenChar = chosenChar.concat(numChar);    //adding numeric charaters to the overall array
    }
    
    if (specialConfirm == true){
        chosenChar = chosenChar.concat(specChar);   //adding special charaters to the overall array
    }
    
    //for loop to loop over password length and grab random character from the chosenChar array
    for (i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * chosenChar.length);
        userPassword.push(chosenChar[randomIndex]);
        console.log(userPassword);
    } 
    
    userPassword = userPassword.join("");
    return userPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


