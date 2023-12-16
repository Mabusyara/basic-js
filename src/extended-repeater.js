const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const text = String(str);
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ?? '|';
  const additionSeparator = options.additionSeparator ?? '|';

  const innerText = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const outerText = Array(repeatTimes).fill(text + innerText).join(separator);

  return outerText;
}

module.exports = {
  repeater
};
