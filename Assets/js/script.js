// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Generate button");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // array
  var selected = [];

  console.log("Generate Password"); // asking user password preference
  var upperCase = confirm("Select upper case letters?");
  var lowerCase = confirm("Select lower case letters?");
  var numerals = confirm("Select numerals?");
  var specialCharacter = confirm("Select special characters?");
  // console.log(upperCase);

  // validate input
  while (
    upperCase === false &&
    lowerCase === false &&
    specialCharacter === false &&
    numerals === false
  ) {
    alert("Speficy your preference:");
    var upperCase = confirm("Select uppercase letters?");
    var lowerCase = confirm("Select lowercase letters?");
    var numerals = confirm("Select numerals?");
    var specialCharacter = confirm("Select special characters?");
  }

  // password length criteria
  var userPasswordLength = parseInt(
    prompt(
      "How long would you want your password? Please choose between 8-128."
    )
  );
  while (userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Please choose length of your password between 8-128.");
    userPasswordLength = prompt("How long would you want your password?");
  }

  // array for passing criteria
  var upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //var specialCharacter = [" ", "!", " ", ",", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\", "^", "_", ",", "`", "{", "|", "}", "~"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  // upper case inserted and chosen
  if (upperCase) {
    // for (var x = 0, x < upperCase.length; x++) {
    //   chosen.push(upperCase[x]);
    // }
    selected.concat(upper);
  }

  // lower case inserted and chosen
  if (lowerCase) {
    selected.concat(lower);
    // for (var y = 0, y < lowerCase.length; y++ ){
    //   chosen.push(lowerCase[y]);

    // }
  }

  // if numeral inserted and chosen
  if (numerals) {
    selected.concat(numbers);
    // for (var z = 0, z < numerals.length; z++){
    //   chosen.push(numerals[z]);

    //}
  }

  // if special character inserted and chosen
  if (specialCharacter) {
    selected.concat(special);
    // for (var a = 0; a < specialCharacter.length; a++){
    //   chosen.push(specialCharacter);
    // }
  }
  console.log(selected);
  // finally the result stores all password criteria
  var finalResult = [];
  for (b = 0; b < userPasswordLength; b++) {
    finalResult.push(selected[Math.floor(Math.random() * selected.length)]);
  }

  console.log(finalResult); // return finalResult
  return finalResult.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("JS File");
