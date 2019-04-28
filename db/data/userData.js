const faker = require("faker");
const { languages } = require("./language-codes.json");

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
  native_language: languages[Math.floor(Math.random() * 100)].English,
  lang_2: languages[Math.floor(Math.random() * 100)].English,
  lang_3: languages[Math.floor(Math.random() * 100)].English,
  availaibility: faker.date.weekday(),
  credits: Math.floor(Math.random() * 5),
});

const generateFakeUser = () => {
  const fakeUsers = [];
  const desiredFakeUsers = 200;

  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }

  return fakeUsers;
};

module.exports = { generateFakeUser };
