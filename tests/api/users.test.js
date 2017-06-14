// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')

var app = require('../../routes')
var setupDb = require('../setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})

test.cb('getRentals gets all rentals', function (t) {
  var expected = 10
  request(app)
    .get('/rentals')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.users.length, expected)
      t.end()
    })
})
