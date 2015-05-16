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
    var r = row.slice()
    r[i] = 1
    result[i] = rv(r)
  }
  return result
}
