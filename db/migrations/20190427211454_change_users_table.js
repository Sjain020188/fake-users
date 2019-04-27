exports.up = function(knex, Promise) {
  return knex.schema.alterTable("users", (table) => {
    table
      .integer("native_language")
      .unsigned()
      .references("languages.id")
      .alter();
  });
};

exports.down = function(knex, Promise) {};
