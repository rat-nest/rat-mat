'use strict'

var rv = require('rat-vec')
var get = require('./get')

module.exports = getColumn

function getColumn(matrix, j) {
  var r = matrix.length
  var res = new Array(c)
  for(var i=0; i<r; ++i) {
    res[i] = get(matrix, i, j)
  }
  return rv(res)
}
