'use strict'

var cols = require('./cols')
var getc = require('./getc')

module.exports = transpose

function transpose(matrix) {
  var c = cols(matrix)
  var result = new Array(c)
  for(var i=0; i<c; ++i) {
    result[i] = getc(matrix, i)
  }
  return result
}
