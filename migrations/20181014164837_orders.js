
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('email')
    table.string('items')
  })
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
};
