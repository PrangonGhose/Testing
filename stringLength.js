function stringLength(inputString) {
  if (inputString.length >= 1 && inputString.length <= 10) {
    return inputString.length;
  } else {
    try {
      if (inputString.length < 1) {
        throw "Less than one. ";
      } else if (inputString.length > 10) {
        throw "Greater than one. ";
      }
    }
    catch (err) {
      const message = err + 'Insert a number between one and ten.'
      return message;
    }
  }
}

module.exports = stringLength;