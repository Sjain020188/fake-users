const { generateFakeUser } = require("../data/userData.js");

exports.seed = function(knex, Promise) {
  const fakeUsers = generateFakeUser();
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert(fakeUsers);
    });
};
