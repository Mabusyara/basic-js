const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const temp = String(n).split('');
  let indexOfWeakNumber = temp.length - 1;
  for (let i = 1; i < temp.length; i += 1) {
    if (temp[i] > temp[i - 1]) {
      indexOfWeakNumber = i - 1;
      break;
    }
  }
  temp.splice(indexOfWeakNumber, 1);
  return Number(temp.join(''));
}

module.exports = {
  deleteDigit
};
