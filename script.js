// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "0123456789";
  var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
  var charsToBeUsed = "";
  var passwordGenerated = "";
  var passwordLength = window.prompt("length of the password (at least 8 characters and no more than 128 characters )")
  if (!passwordLength) {
    return;
  }

  if (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("error");
    passwordLength = null;
  }

  var isNumber = false;
  var isSpecialchar = false;

  var isLowercase = window.prompt("Do you want to include LowerCase", "yes")
  console.log("isLowercase::", isLowercase.toLowerCase());
  if ((!isLowercase) || ((isLowercase.toLowerCase() != "yes") && (isLowercase.toLowerCase() != "no"))) {
    window.alert("Answer should be in either yes or no");
    return;
  }

  if (isLowercase.toLowerCase() == "yes") {
    charsToBeUsed += lowercaseChar;
  }

  var isUppercase = window.prompt("Do you want to include UpperCase", "yes")
  console.log("isUppercase::", isUppercase);
  if ((!isUppercase) || ((isUppercase.toLowerCase() != "yes") && (isUppercase.toLowerCase() != "no"))) {
    window.alert("Answer should be in either yes or no");
    return;
  }

  if (isUppercase.toLowerCase() == "yes") {
    charsToBeUsed += uppercaseChar;
  }

  var isNumber = window.prompt("Do you want to include Number", "yes")

  console.log("isNumber::", isNumber);
  if ((!isNumber) || ((isNumber.toLowerCase() != "yes") && (isNumber.toLowerCase() != "no"))) {
    window.alert("Answer should be in either yes or no");
    return;
  }

  if (isNumber.toLowerCase() == "yes") {
    charsToBeUsed += numberChar;
  }

  var isSpecialchar = window.prompt("Do you want to include Special Characters", "yes")
  console.log("isSpecialchar::", isSpecialchar);
  if ((!isSpecialchar) || ((isSpecialchar.toLowerCase() != "yes") && (isSpecialchar.toLowerCase() != "no"))) {
    window.alert("Answer should be in either yes or no");
    return;
  }

  if (isSpecialchar.toLowerCase() == "yes") {
    charsToBeUsed += specialChar;
  }


  for (var i = 0; i < passwordLength; i++) {
    passwordGenerated += charsToBeUsed.charAt(Math.floor(Math.random() * charsToBeUsed.length));
  }

  return passwordGenerated;
}