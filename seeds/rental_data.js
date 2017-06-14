
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rentals').del()
    .then(function () {
      // Inserts seed entries
      return knex('rentals').insert([
        {id: 1, created_at: '2017-06-13 21:04:44', first_name: 'maria', last_name: 'la', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-11T12:00:00.000Z', start_rental: '10:00', end_rental: '14:00'},
        {id: 2, created_at: '2017-06-13 21:04:44', first_name: 'tom', last_name: 'aaa', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-11T12:00:00.000Z', start_rental: '16:00', end_rental: '22:00'},
        {id: 3, created_at: '2017-06-13 21:04:44', first_name: 'libby', last_name: 'baaa', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-12T12:00:00.000Z', start_rental: '10:00', end_rental: '12:00'},
        {id: 4, created_at: '2017-06-13 21:04:44', first_name: 'ellie', last_name: 'baa', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-12T12:00:00.000Z', start_rental: '20:00', end_rental: '22:00'},
        {id: 5, created_at: '2017-06-13 21:04:44', first_name: 'john', last_name: 'da', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-14T12:00:00.000Z', start_rental: '15:00', end_rental: '18:00'},
        {id: 6, created_at: '2017-06-13 21:04:44', first_name: 'tony', last_name: 'ra', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-14T12:00:00.000Z', start_rental: '19:00', end_rental: '22:00'},
        {id: 7, created_at: '2017-06-13 21:04:44', first_name: 'tim', last_name: 'wa', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-15T12:00:00.000Z', start_rental: '11:00', end_rental: '13:00'},
        {id: 8, created_at: '2017-06-13 21:04:44', first_name: 'shale', last_name: 'za', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-15T12:00:00.000Z', start_rental: '14:00', end_rental: '17:00'},
        {id: 9, created_at: '2017-06-13 21:04:44', first_name: 'kale', last_name: 'ka', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-16T12:00:00.000Z', start_rental: '10:00', end_rental: '26:00'},
        {id: 10, created_at: '2017-06-13 21:04:44', first_name: 'bale', last_name: 'ba', email: 'a@b.c', phone_number: '123', address_1: 'no, st, suburb', address_2: 'no, st, suburb', rental_date: '2017-06-17T12:00:00.000Z', start_rental: '11:00', end_rental: '16:00'}
      ]);
    });
};
