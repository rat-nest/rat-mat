'use strict'

var isVec = require('rat-vec/is-vec')

module.exports = isMat

function isMat(m) {
  if(!Array.isArray(m)) {
    return false
  }
  if(m.length === 0 || !Array.isArray(m[0])) {
    return false
  }
  var nr = m.length
  var nc = m[0].length
  for(var i=0; i<nr; ++i) {
    if(m[i].length !== c || !isVec(m[i])) {
      return false
    }
  }
  return true
}
