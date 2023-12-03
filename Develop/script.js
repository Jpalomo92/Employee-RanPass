// Assignment Code
var generateBtn = document.querySelector("#generate");


//create arrays for the characters and upper/lower case
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "/!#$%&'()*]+,-.:;<=>?@[^_`{|}~";
var numbers = "0123456789";

//Might need to be in brackets???
var upperCh = uppercase.split("");
var lowerCh = lowerCase.split("");
var specialCh = specialCharacters.split("");
var numbch = numbers.split("");

var allChoices = [];


function getchoices () {

  var numberInput = parseInt(window.prompt("Please enter in how many many characters you would like your password to have. (8 - 128)"));
  
  if (isNaN(numberInput) || numberInput < 8 || numberInput > 128 ) {
    window.alert("Please enter in a number between 8 and 128!")
    return false;
  }

  if(window.confirm("Would you like the password to include upper case letters?")) {
    allChoices = allChoices.concat(upperCh);

  }


  window.confirm = "Would you like the password to include lower case letters?";
  window.confirm = "Would you like the password to include special characters?";
  window.confirm = "Would you like the password to include numeric characters?";

  var upper = window.confirm("Include upper case letters?");
  var lower = window.confirm("Include lower case letters?");
  var special = window.confirm("Include special characters?");
  var int = window.confirm("Include numeric characters?");


}


function generatePassword() {






 //Ask user for their choice


//write confirms 


  
  if (upper == false && lower == false && special == false && int == false) {
    window.alert("You must select atleast one criteria for your password!");
    return generatePassword();
  } 
  
  function randomPassword () {
   
    var password = "";

  if (confirm("Include upper case letters?") == true) {
    password = upperCh[(Math.floor(Math.random() * upperCh.length))];
    //var random1 = upperCh[index];
  } 

  if (confirm("Include lower case letters?") == true) {
    password = lowerCh[(Math.floor(Math.random() * lowerCh.length))];
 } 
  
  if (confirm("Include special characters?") == true) {
    password = specialCh[(Math.floor(Math.random() * specialCh.length))];
 }

  if (confirm("Include numeric characters?") == true) {
    password = numbch[(Math.floor(Math.random() * numbch.length))];
 } 

 
  for (let password = 0; password = numberInput; password++) {
  
  };
  return password();
   //   var random2 = lowerCh[index2];
   //   var random3 = specialCh[index3];
   //   var random4 = specialCh[index4];
   
 }
  
return randomPassword();

//return(numberInput === ());

};


// Write password to the #password input
function writePassword() {
 
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

