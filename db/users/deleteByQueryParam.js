module.exports = (knex, query) => {
  return () => {
    return Promise.resolve(
      knex
        .delete()
        .from("users")
        .where(query)
        .then((users) => {
          return users;
        })
    );
  };
};
