const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = arr.reduce((sum, item, index) => {
    const doIt = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    if (index && arr[index-1] === '--discard-next') undefined;
    else if (item === '--discard-prev') {
      if(index > 1 && arr[index-2] == '--discard-next') undefined;
      else sum.pop();
    }
    else if (item === '--double-next' && (index !== arr.length - 1)) sum.push(arr[index+1]);
    else if ((item === '--double-prev' && index)){
      if(index > 1 && arr[index-2] == '--discard-next') undefined;
      else sum.push(arr[index-1]);
    }
    else if (!doIt.includes(item)) sum.push(item);
    return sum;
  }, []);

  return res;
}

module.exports = {
  transform
};
