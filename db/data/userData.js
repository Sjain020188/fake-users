const faker = require("faker");

const createFakeUser = () => ({
  name: faker.name.firstName(),
  country: faker.address.country(),
  phone_number: faker.phone.phoneNumber(),
  mob_number: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  skype_id: faker.internet.userName(),
  line_id: faker.internet.userName(),
  whatsapp_number: faker.phone.phoneNumber(),
  viber_number: faker.phone.phoneNumber(),
  native_language: Math.floor(Math.random() * 100) + 185,
  lang_2: "Japanese",
  lang_3: "French",
  availaibility: "weekend",
  credits: Math.floor(Math.random() * 5),
});

const generateFakeUser = () => {
  const fakeUsers = [];
  const desiredFakeUsers = 15;

  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }

  return fakeUsers;
};

module.exports = { generateFakeUser };
