exports.up = knex => knex.schema.createTable('rentals', table => {
  table.increments('id').primary()
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.string('first_name').notNullable()
  table.string('last_name')
  table.string('email').notNullable()
  table.integer('phone_number')
  table.string('address_1')
  table.string('address_2')
  table.dateTime('start_rental')
  table.dateTime('end_rental')
})

exports.down = knex => knex.schema.dropTable('rentals')