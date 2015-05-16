'use strict'

var vadd = require('rat-vec/add')

module.exports = madd

function madd(a, b) {
  return a.map(function(x, i) {
    return vadd(x, b[i])
  })
}
