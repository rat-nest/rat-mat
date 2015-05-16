'use strict'

var vdivs = require('rat-vec/divs')

module.exports = mdivs

function mdivs(a, s) {
  return a.map(function(x) {
    return vdivs(x, s)
  })
}
