'use strict'

var scalar = require('rat-vec/scalar')
var add = require('rat-vec/add')
var get = require('./get')
var shape = require('./shape')

module.exports = trace

function trace(matrix) {
  var s = shape(matrix)
  var res = scalar(0)
  if(s[0] === s[1]) {
    for(var i=0; i<s[0]; ++i) {
      res = add(res, get(matrix, i, i))
    }
  }
  return res
}
