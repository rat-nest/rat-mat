'use strict'

var veq = require('rat-vec/equal')

module.exports = meq

function meq(a, b) {
  return a.all(function(x, i) {
    return veq(x, b[i])
  })
}
