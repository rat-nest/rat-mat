'use strict'

var setc = require('rat-vec/setc')

module.exports = setComponent

function setComponent(matrix, i, j, value) {
  var nmatrix = matrix.slice()
  nmatrix[i] = setc(matrix[i], j, value)
  return nmatrix
}
