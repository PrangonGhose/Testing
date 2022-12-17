function capitalize(inputString) {
  const firstLetter = inputString[0].toUpperCase();
  let newString = firstLetter;
  for (let i = 1; i < inputString.length; i++) {
    newString = newString + inputString[i];
  }
  return newString;
}

module.exports = capitalize;