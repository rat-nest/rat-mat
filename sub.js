'use strict'

var vsub = require('rat-vec/sub')

module.exports = msub

function msub(a, b) {
  return a.map(function(x, i) {
    return vsub(x, b[i])
  })
}
