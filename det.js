'use strict'

var rat = require('big-rat')
var mul = require('big-rat/mul')
var lu = require('./lu')

module.exports = det

function det(m) {
  var U = lu(m)
  if(!U) {
    return 0
  }
  U = U[0]
  var d = rat(1)
  for(var i=0; i<U.length; ++i) {
    d = mul(d, U[i][i])
  }
  return d
}
