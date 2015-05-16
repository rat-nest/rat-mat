'use strict'

module.exports = setRow

function setRow(matrix, i, row) {
  var nmatrix = matrix.slice()
  nmatrix[i] = row
  return nmatrix
}
