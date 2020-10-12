// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // array
  var selected = [];

  // asking user password preference
  var upperCase = confirm("Select upper case letters?");
  var lowerCase = confirm("Select lower case letters?");
  var numerals = confirm("Select numerals?");
  var specialCharacter = confirm("Select special characters?");
  // console.log(upperCase);
}

// validate input
while ((upperCase===false) && (lowerCase===false) && (specialCharacter===false) && (numerals===false)) {
  alert ("Speficy your preference:");
  var upperCase = confirm ("Select uppercase letters?");
  var lowerCase = confirm ("Select lowercase letters?");
  var numerals = confirm ("Select numerals?");
  var specialCharacter = confirm ("Select special characters?");
}

// password length criteria
var userPasswordLength = prompt ("How long would you want your password? Please choose between 8-128.");
while ((userPasswordLength < 8) || (userPasswordLength > 128)){
  alert ("Please choose length of your password between 8-128.");
  userPasswordLength = prompt ("How long would you want your password?");
}


// array for passing criteria
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//var specialCharacter = [" ", "!", " ", ",", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\", "^", "_", ",", "`", "{", "|", "}", "~"];
var specialCharacter = ["",  "!", "#", "$", "%",  "&",  "'",  "(", ")", "*", "+", ",", "-",  ".", "/", ":", ";", "<", "=", ">", "?",  "@", "[", "\", "\']', "^",  "_", "`", "{", "|", "}", "~", '"']; 



// upper case inserted and chosen
if (upperCase) {
  for (var x = 0, x < upperCase.length; x++) {
    chosen.push(upperCase[x]);
  }
}

// lower case inserted and chosen
if (lowerCase) {
  for (var y = 0, y < lowerCase.length; y++ ){
    chosen.push(lowerCase[y]);

  }
}

// if numeral inserted and chosen
if (numerals){
  for (var z = 0, z < numerals.length; z++){
    chosen.push(numerals[z]);

}
}

// if special character inserted and chosen
if (specialCharacter){
  for (var a = 0; a < specialCharacter.length; a++){
    chosen.push(specialCharacter);
  }
}

// finally the result stores all password criteria
var finalResult = [];
for (b =0; b < userPasswordLength; b++){
  finalResult.push(chosen[Math.floor(Math.random()*chosen.length)]);

}

// return finalResult
return(finalResult.join(""));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
