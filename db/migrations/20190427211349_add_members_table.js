exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("name", 100)
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.string("country", 100)
      .notNullable() // add a not-null constraint to this column
      .index();

    t.string("phone_number", 100).index();

    t.string("mob_number", 100).index();

    t.string("email", 100).index();

    t.string("skype_id", 100).index();

    t.string("line_id", 100).index();

    t.string("whatsapp_number", 100).index();

    t.string("viber_number", 100).index();

    t.string("native_language", 100)
      .notNullable() // add a not-null constraint to this column
      .index();

    t.string("lang_2", 100).index();

    t.string("lang_3", 100).index();

    t.string("availaibility", 100).index();

    t.integer("credits", 100).index();

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
