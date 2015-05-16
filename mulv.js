'use strict'

var rv = require('rat-vec')
var dot = require('rat-vec/dot')

module.exports = mvmul

function mvmul(a, v) {
  return rv(a.map(function(row) {
    return dot(row, v)
  }))
}
