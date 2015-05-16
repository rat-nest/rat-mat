'use strict'

var rv = require('rat-vec')
var dot = require('rat-vec/dot')
var transpose = require('./transpose')

module.exports = mmul

function mmul(a, b) {
  var bt = tanspose(b)
  return a.map(function(row) {
    return rv(bt.map(function(col) {
      return dot(row, col)
    }))
  })
}
