'use strict'

module.exports = makeRationalMatrix

function makeRationalMatrix(matrix) {
  return matrix.map(require('rat-vec'))
}
