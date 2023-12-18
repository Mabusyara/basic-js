const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';

  let result = '';
  let currentLetter = str[0];
  let counter = 0;

  for (let letter of str) {
    if (currentLetter === letter) counter += 1;
    else if (currentLetter !== letter && counter === 1) {
      result += currentLetter;
      currentLetter = letter;
      counter = 1;
    }
    else if (currentLetter !== letter) {
      result += counter + currentLetter;
      currentLetter = letter;
      counter = 1;
    }
    console.log(currentLetter, counter);
  }
  if (counter === 1) result += currentLetter;
  else result += counter + currentLetter;
  
  return result;
}

module.exports = {
  encodeLine
};
