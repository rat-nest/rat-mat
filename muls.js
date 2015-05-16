'use strict'

var vmuls = require('rat-vec/muls')

module.exports = mmuls

function mmuls(a, s) {
  return a.map(function(x) {
    return vmuls(x, s)
  })
}
