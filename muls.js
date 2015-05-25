'use strict'

var vmuls = require('rat-vec/muls')

module.exports = mmuls

function mmuls(a, s) {
  return a.map(function(x, i) {
    return vmuls(x, s)
  })
}
