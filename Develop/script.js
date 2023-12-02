// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays for the characters and upper/lower case

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "/!#$%&'()*]+,-.:;<=>?@[^_`{|}~";
var numbers = "0123456789";

var upperCh = uppercase.split(" ");
var lowerCh = lowerCase.split(" ");
var specialCh = specialCharacters.split(" ");
var numbSplit = numbers.split(" ");

// Write password to the #password input
function writePassword() {
  parseInt(window.prompt("Please enter in how many many characters you would like your password to have. (8 - 128)"));
  


//write confirm 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//get input 
//parse through answer choices after questions
//store them in an object
//then randomize
//return - returns a value 



function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}
