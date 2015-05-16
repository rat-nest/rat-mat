'use strict'

var round = require('rat-vec/to-float')

module.exports = round

function mround(a) {
  return a.map(round)
}
