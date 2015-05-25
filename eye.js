'use strict'

var rv = require('rat-vec')

module.exports = eye

function eye(n) {
  var row = new Array(n)
  for(var i=0; i<n; ++i) {
    row[i] = 0
  }
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    row[i] = 1
    result[i] = rv(row)
    row[i] = 0
  }
  return result
}
