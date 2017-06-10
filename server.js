var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

var rentals = require('./routes/rentals')

var server = express()

server.set('knex', knex)


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '/app')))

// Routes
server.use('/rentals', rentals)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/app', 'index.html'))
})

module.exports = server
