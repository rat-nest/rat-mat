'use strict'

var transpose = require('./transpose')
var hstack = require('./hstack')

module.exports = vstack

function vstack(a, b) {
  return transpose(hstack(tranpose(a), transpose(b)))
}
