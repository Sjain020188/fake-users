module.exports = (knex, query) => {
  return () => {
    return Promise.resolve(
      knex
        .select()
        .from("users")
        .where(query)
        .then((users) => {
          return users;
        })
    );
  };
};
