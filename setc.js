'use strict'

module.exports = setComponent

function setComponent(matrix, i, j, value) {
  var nmatrix = matrix.slice()
  nmatrix[i] = require('rat-vec/setc')(matrix[i], j, value)
  return nmatrix
}
