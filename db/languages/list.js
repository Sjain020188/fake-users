module.exports = (knex) => {
  return () => {
    return Promise.resolve(
      knex
        .select()
        .from("languages")
        .then((languages) => {
          return languages;
        })
    );
  }; // fix me!
};
