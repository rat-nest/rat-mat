'use strict'

var rv = require('rat-vec')

module.exports = makeRationalMatrix

function makeRationalMatrix(matrix) {
  return matrix.map(rv)
}
