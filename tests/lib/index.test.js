// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var db = require('../../lib')
var setupDb = require('../setup-db.js')

setupDb(test)

test('getRentals gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getRentals(t.context.db)
    .then(function (result) {
      var actual = result.length
      t.is(actual, expected)
    })
})
