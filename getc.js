'use strict'

var getc = require('rat-vec/getc')

module.exports = getComponent

function getComponent(matrix, i, j) {
  return getc(matrix[i], j)
}
