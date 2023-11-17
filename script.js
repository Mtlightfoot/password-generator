// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let amountOfCharacters = 0;
let password = "";
let specialChars;
let numericChars;
let lowercaseChars;
let uppercaseChars;
let passwordCharacterSet = [];

// Function to prompt user for password options
function getPasswordOptions() {

  // This code is to save how many characters the person wants into a variable
  amountOfCharacters = prompt("How many characters would you like the password to contain, it must be between 8 and 128 characters");
  if (amountOfCharacters < 8 || amountOfCharacters > 128) {
    do {
      alert("You must pick between 8 and 128 characters.");
      amountOfCharacters = prompt("How many characters would you like the password to contain, it must be between 8 and 128 characters");
    }
    while (amountOfCharacters < 8 || amountOfCharacters > 128);
  }

  // This code is to save whether the person wants special characters included in their password
  specialChars = confirm("Click OK to confirm including special characters");
  // This code is to save whether the person wants numeric characters included in their password
  numericChars = confirm("Click OK to confirm including numeric characters");
  // This code is to save whether the person wants lowercase characters included in their password
  lowercaseChars = confirm("Click OK to confirm including lowercase characters");
  // This code is to save whether the person wants uppercase characters included in their password
  uppercaseChars = confirm("Click OK to confirm including uppercase characters")

  if (specialChars === false && numericChars === false && lowercaseChars === false && uppercaseChars === false) {
    do {
      alert("You must pick at least one type of character");
      specialChars = confirm("Click OK to confirm including special characters");
      numericChars = confirm("Click OK to confirm including numeric characters");
      lowercaseChars = confirm("Click OK to confirm including lowercase characters");
      uppercaseChars = confirm("Click OK to confirm including uppercase characters")
    }
    while (specialChars === false && numericChars === false && lowercaseChars === false && uppercaseChars === false);
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  result = arr[Math.floor(Math.random() * arr.length)];
  return result;
}

// Function to generate password with user input
function generatePassword() {

  password = "";
  passwordCharacterSet = [];

  getPasswordOptions();

  if (specialChars) {
    passwordCharacterSet = passwordCharacterSet.concat(specialCharacters);
  }

  if (numericChars) {
    passwordCharacterSet = passwordCharacterSet.concat(numericCharacters);
  }

  if (lowercaseChars) {
    passwordCharacterSet = passwordCharacterSet.concat(lowerCasedCharacters);
  }

  if (uppercaseChars) {
    passwordCharacterSet = passwordCharacterSet.concat(upperCasedCharacters);
  }

  for (i = 0; i < amountOfCharacters; i++) {
    password += getRandom(passwordCharacterSet);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);