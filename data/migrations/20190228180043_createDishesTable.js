exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(tbl) {
    //auto-increments ids
    tbl.increments();
    //name as unique, required string under 128 characters
    tbl
      .string("name", 128)
      .unique()
      .notNullable();

    tbl.timsetamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
