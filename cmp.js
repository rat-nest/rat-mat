'use strict'

var vcmp = require('rat-vec/cmp')

module.exports = mcmp

function mcmp(a, b) {
  return a.map(function(x, i) {
    return vcmp(x, b[i])
  })
}
