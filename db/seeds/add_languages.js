const { languages } = require("../data/index.js");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("languages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("languages").insert(languages);
    });
};
