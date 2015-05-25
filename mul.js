'use strict'

var vec = require('rat-vec')
var dot = require('rat-vec/dot')
var transpose = require('./transpose')

module.exports = mmul

function toMat(m) {
  if(isMat(m)) {
    return m
  }
  if(isVec(m)) {
    return [m]
  }
  return
}

function mmul(a, b) {
  if(!isMat(a)) {
    if(isVec(a)) {
      a =
    } else {
    }
  }
}
