
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const randomNumer = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const randomSpecial = ['!', '@', '#', '$', '%', '&', '*', '+', '?'];


// Assignment Code, add CLEAR button
var clearBtn = document.querySelector('#clear');
clearBtn.addEventListener("click", clearPassword);
function clearPassword() {
  console.log('blahblahablahalblhaaa');
}



var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

  var letterString = "";

  for (let i = 0; i < 5; i++) {
    letterString += lowerCase[Math.floor(Math.random() * (26 - 0))];
  }



 return letterString;
}



















































// Clickable button that initiates series of prompts for password criteria

// Window.prompt 1: How many characters would you like your password to be? Must be between 8 and 128
      // Must be a numeric value between 8 and 128, else return "Please enter a numeric value between 8 and 128."
      // Response must be the placeholder for how many characters need to be pulled from the remaining prompt responses



// Window.prompt 2: Would you like to include lower case letters?
      // if yes, then randomize choice from array of lower case; else, skip to next prompt



// Window.prompt 3: Would you like to include upper case letters?
      // if yes, then randomize choice from array of upper case; else, skip to next prompt



// Window.prompt 4: Would you like to include numbers?
      // if yes, then randomize choice from array of 0-9; else, skip to next prompt



// Window.prompt 5: Would you like to include special characters such as &, $, @, etc.?
      // if yes, then randomize choice from array of special charcters; else, generate password and display in window



// Based on the criteria selected, a password is generated and displayed in an alert or written to the window.