module.exports = (knex) => {
  return () => {
    return Promise.resolve(
      knex
        .select()
        .from("users")
        .then((users) => {
          return users;
        })
    );
  };
};
