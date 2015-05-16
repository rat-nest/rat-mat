'use strict'

var vget = require('rat-vec/get')
var vset = require('rat-vec/set')

module.exports = setColumn

function setColumn(matrix, j, column) {
  return matrix.forEach(function(row, i) {
    return vset(row, j, vget(column, i))
  })
}
