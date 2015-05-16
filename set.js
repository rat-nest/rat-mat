'use strict'

var vset = require('rat-vec/set')
var rset = require('./setr')

module.exports = setComponent

function setComponent(matrix, i, j, value) {
  return rset(matrix, i, vset(matrix[i], j, value))
}
