
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numsZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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


      // Initial function, generates input for amount of characters
      var charAmount = 0;

      function callPrompt(){
            while (charAmount === 0 || charAmount === null || isNaN(charAmount)) {
                  charAmount = Number(prompt("How many characters would you like your password to be?"));
            }
      }
      callPrompt()
      
      if(charAmount > 128 || charAmount < 8) {
           while(charAmount > 128 || charAmount < 8  ){
                  charAmount = Number(prompt("Please enter a valid numeric response between 8 and 128 characters."))

                  if(isNaN(charAmount)){
                        callPrompt()
                  }
           }
     }

     var isLower = confirm("Would you like to use lowercase letters in your passord? Click 'OK' for yes or 'Cancel' for no.");

     var isUpper = confirm("Would you like to use uppercase letters in your password? Click 'OK' for yes or 'Cancel' for no.");

     var isNumber = confirm("Would you like to use numbers in your password? Click 'OK' for yes or 'Cancel' for no.");

     var isSpecial = confirm("Would you like to use special characters in your password? Click 'OK' for yes or 'Cancel' for no.");

     console.log(isLower, 'lower');
     console.log(isUpper, 'upper');
     console.log(isNumber, 'number');
     console.log(isSpecial, 'special');

      var letterString = "";

      for (let i = 0; i < charAmount; i++) {

            if (isLower) {
                  var randomNumber = Math.floor(Math.random() * (26 - 0));
            letterString += lowerCase[randomNumber];
            } else {
                  console.log('lower denied');
            }

            if (isUpper) {
                  var randomNumber = Math.floor(Math.random() * (26 - 0));
            letterString += upperCase[randomNumber];
            } else {
                  console.log('upper denied');


            }if (isNumber) {
                  var randomNumber = Math.floor(Math.random() * (8 - 0));
            letterString += numsZeroToNine[randomNumber];
            } else {
                  console.log('number denied');
            }

            if (isSpecial) {
                  var randomNumber = Math.floor(Math.random() * (8 - 0));
            letterString += randomSpecial[randomNumber];
            } else {
                  console.log('special denied');
            }

            






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