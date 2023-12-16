const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  const s1Dict = new Map();
  s1.split('')
    .forEach(letter => {
      s1Dict.has(letter) ? s1Dict.set(letter, s1Dict.get(letter) + 1) : s1Dict.set(letter, 1)
    })

  const s2Dict = new Map();
  s2.split('')
    .forEach(letter => {
      s2Dict.has(letter) ? s2Dict.set(letter, s2Dict.get(letter) + 1) : s2Dict.set(letter, 1)
    })

  s1Dict.forEach((value, key) => {if (s2Dict.has(key)) count += Math.min(value, s2Dict.get(key))});
  return count;
}

module.exports = {
  getCommonCharacterCount
};
