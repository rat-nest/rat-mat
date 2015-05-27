'use strict'

var rat = require('big-rat')
var add = require('big-rat/add')
var sub = require('big-rat/sub')
var mul = require('big-rat/mul')
var div = require('big-rat/div')

module.exports = LUdecomp

function LUdecomp(A) {
  var n = A.length
  var m = A[0].length
  if(n !== m) {
    return null
  }
  var L = eye(n)
  var U = eye(n)
  for(var j = 0; j < n; j++) {
      for(var i = j; i < n; i++) {
          var sum = rat(0)
          for(var k = 0; k < j; k++) {
              sum = add(sum, mul(L[k][i], U[j][k]))
          }
          L[j][i] = sub(A[j][i], sum)
      }
      var denom = L[j][j]
      if(isZero(denom)) {
        return null
      }
      for(var i = j+1; i < n; i++){
          var sum = rat(0)
          for(var k = 0; k < j; k++){
              sum = add(sum, mul(L[k][j], U[i][k]))
          }
          U[i][j] =  div(sub(A[i][j], sum), denom)
      }
  }
  return [L, U]
}
