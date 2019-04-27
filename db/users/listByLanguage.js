module.exports = (knex, lang) => {
  return () => {
    return Promise.resolve(
      knex
        .select()
        .from("users")
        .where({ native_language: lang })
        .then((users) => {
          return users;
        })
    );
  };
};
