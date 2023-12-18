const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const [height, width] = [matrix.length, matrix[0].length];
  const resultMatrix = [];

  for (let i = 0; i < height; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < width; j++) {
      resultMatrix[i][j] = 0;
    }
  }

  const aroundSquares = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      aroundSquares.forEach(delta => {
        if ((i + delta[0]) >= 0 && (i + delta[0]) < height && (j + delta[1]) >= 0 && (j + delta[1]) < width) {
          resultMatrix[i][j] += matrix[i + delta[0]][j + delta[1]];
        }
      });
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
