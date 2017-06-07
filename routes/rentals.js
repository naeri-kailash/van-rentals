const bodyParser = require('body-parser')
const express = require('express')
const rentals = require('../lib/rentals')

const router = express.Router()
router.use(bodyParser.json())

// get info about all rentals

router.get('/', (req, res) => {
  rentals.getRentals()
  .then(function (result) {
    res.send(result)
  })
  .catch((err) => {
    if (err) {
      console.error(err.message)
    }
  })
})

router.post('/save', (req, res) => {
  rentals.saveRental(req.body.first_name, req.body.last_name, req.body.email, req.body.phone_number, req.body.address_1, req.body.address_2, req.body.start_rental, req.body.end_rental)
      .then(() => rentals.getRentals())
      .then(function (result) {
        res.send(result)
      })
      .catch((err) => {
        if (err) {
          console.error(err.message)
        }
      })
})

module.exports = router
