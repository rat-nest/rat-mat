var tape = require('tape')
var mat = require('../index')
var rat = require('big-rat')
var equals = require('big-rat/equals')

tape('rat-mat ctor', function(t) {

  var m = mat([
    [1, 2, 3],
    [4, rat(5), '6']
  ])

  t.ok(equals(m[0][0], rat(1)))
  t.ok(equals(m[0][1], rat(2)))
  t.ok(equals(m[0][2], rat(3)))
  t.ok(equals(m[1][0], rat(4)))
  t.ok(equals(m[1][1], rat(5)))
  t.ok(equals(m[1][2], rat(6)))

  t.end()
})
