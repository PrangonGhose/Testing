function reverseString(inputString) {
  let newString = '';
  for (let i=inputString.length-1; i>=0; i--) {
    newString = newString + inputString[i];
  }
  return newString;
}

module.exports = reverseString;