const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getRentals,
  saveRental
}

function getRentals () {
  return knex('rentals')
  .select()
  .catch((err) => {
    if (err) {
      console.error(err.message)
    }
  })
}

function saveRental (first_name, last_name, email, driver_needed, phone_number, address_1, address_2, start_rental, end_rental) {
  return knex('rentals')
    .insert({
      first_name: first_name,
      last_name: last_name,
      email: email,
      driver_needed: driver_needed,
      phone_number: phone_number,
      address_1: address_1,
      address_2: address_2,
      start_rental: start_rental,
      end_rental: end_rental
    })
    .catch((err) => {
      if (err) {
        console.error(err.message)
      }
    })
}
