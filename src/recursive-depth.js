const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(arr) {
    let check = arr.some(elem => {
      if (Array.isArray(elem)) return true;
      else return false;
    });
    if (!check) {
      let temp = this.depth;
      this.depth = 1;
      return temp;
    }
    else this.depth += 1;
    arr = arr.flat();
    return this.calculateDepth(arr);
  }
}

module.exports = {
  DepthCalculator
};
