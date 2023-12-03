//create arrays for the characters and upper/lower case
//Made a global variable for the number of characters in a password
var numberInput = 8;
var allChoices = [];

//listed out all characters that I want in a string
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "/!#$%&'()*]+,-.:;<=>?@[^_`{|}~";
var numbers = "0123456789";

//These turn the above string into arrays
var upperCh = uppercase.split("");
var lowerCh = lowerCase.split("");
var specialCh = specialCharacters.split("");
var numbch = numbers.split("");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //calls the getchoices function
  var correctChoice = getchoices();
  var passwordText = document.querySelector("#password");

  //specifies if the choice is true then generate a password if not then returns nothing
  if (correctChoice) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else if (correctChoice == false){

    passwordText.value = "";
  }

  };

  //This function generates the password once its called - 
function generatePassword() {
  var randomPassword = "";

  for(var i = 0; i < numberInput; i++) {
    var randomIndex = Math.floor(Math.random() * allChoices.length);
      randomPassword = randomPassword + allChoices[randomIndex]
  }
    return randomPassword;
  };


//determines which choices are true or not
function getchoices () {
  //resets the choice array to be start off with nothing
  allChoices = [];

  //user defines the length of the password and if its not a number or less than 8 or greater than 128 it will return false
  numberInput = parseInt(prompt("Please enter in how many many characters you would like your password to have. (8 - 128)")); //NaN
  
  if (isNaN(numberInput) || numberInput < 8 || numberInput > 128) {
    alert("Please enter in a number between 8 and 128!");
    return false;
  }

   //Ask user for their choice and confirm if its true - if so then concatenate the array selected and return true
  if(confirm("Would you like the password to include upper case letters?")) {
    allChoices = allChoices.concat(upperCh);

  }

  if(confirm("Would you like the password to include lower case letters?")) {
    allChoices = allChoices.concat(lowerCh);

  }

  if(confirm("Would you like the password to include special letters?")) {
    allChoices = allChoices.concat(specialCh);

  }

  if(confirm("Would you like the password to include numberic characters?")) {
    allChoices = allChoices.concat(numbch);

  }

  return true;


};


//get input 
//parse through answer choices after questions
//store them in an object
//then randomize
//return - returns a value 

