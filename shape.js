'use strict'

var rows = require('./rows')
var cols = require('./cols')

module.exports = getShape

function getShape(matrix) {
  return [rows(matrix), cols(matrix)]
}
