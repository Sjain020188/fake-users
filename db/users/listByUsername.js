module.exports = (knex, email) => {
  return () => {
    return Promise.resolve(
      knex
        .select()
        .from("users")
        .where({ email })
        .then((users) => {
          return users;
        })
    );
  };
};
