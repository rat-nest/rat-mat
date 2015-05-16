'use strict'

module.exports = getComponent

function getComponent(matrix, i, j) {
  return require('rat-vec/getc')(matrix[i], j)
}
