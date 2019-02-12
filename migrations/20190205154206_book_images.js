
exports.up = function(knex, Promise) {
    return knex.schema.createTable('book_images', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('image')

    })

  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('book_images')
  
};
