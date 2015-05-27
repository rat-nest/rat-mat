'use strict'

var lu = require('./lu')
var rat = require('big-rat')
var add = require('big-rat/add')
var sub = require('big-rat/sub')
var mul = require('big-rat/mul')
var div = require('big-rat/div')

module.exports = solve

function solve(m, v) {
  if(v.length !== m.length) {
    return null
  }
  var decomp = lu(m)
  if(!decomp) {
    return null
  }

  var n = m.length

  var Y = new Array(n)
  for(var j=0; j<n; j++) {
    var c = rat(0)
    for(var i=0; i<j; i++) {
        c = add(c, mul(L[i][j], Y[i]))
    }
    Y[j] = div(sub(v[j], c), L[j][j])
  }

  var X = new Array(n)
  for(var j=n-1; j>=0; j--) {
      var c = rat(0)
      for (var i=n-1; i>j; i--) {
          c = add(c, mul(U[i][j], X[i]));
      }
      X[j] = sub(Y[j], c)
  }

  return X
}
