'use strict'

module.exports = numCols

function numCols(matrix) {
  if(matrix.length > 0) {
    return matrix[0].length-1
  }
}
