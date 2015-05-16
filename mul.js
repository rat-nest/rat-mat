'use strict'

var dot = require('rat-vec/dot')
var transpose = require('./transpose')

function mmul(a, b) {
  var bt = tanspose(b)
  return a.map(function(row) {
    return bt.map(function(col) {
      return dot(row, col)
    })
  })
}
