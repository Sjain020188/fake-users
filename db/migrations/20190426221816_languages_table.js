exports.up = function(knex, Promise) {
  return knex.schema.createTable("languages", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("English", 100)
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.string("alpha2", 100)
      .notNullable() // add a not-null constraint to this column
      .index();

    // default to the current time
  });
};

exports.down = function(knex, Promise) {};
