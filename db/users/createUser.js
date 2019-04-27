module.exports = (knex, params) => {
  return () => {
    return Promise.resolve(
      knex("users")
        .insert(params)
        .then((users) => {
          return users;
        })
    );
  };
};
