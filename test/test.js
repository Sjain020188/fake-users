const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setUpServer } = require("../src/server");

const server = setUpServer();

describe("Fake User Database", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server).keepOpen();
  });
  afterEach(() => {
    request.close();
  });
  describe("GET /api/users?name=Shruti", () => {
    it("should call return all the users fom users table", async () => {
      const expected = {
        id: 293,
        name: "Shruti",
        country: "India",
        phone_number: "031111111",
        mob_number: "031111111",
        email: "test@test.com",
        skype_id: "test",
        line_id: "test",
        whatsapp_number: "test",
        viber_number: "test",
        native_language: "Hindi",
        lang_2: "English",
        lang_3: "German",
        availaibility: "hgdh",
        credits: 4,
        created_at: "2019-04-27T23:53:40.073Z",
      };
      const res = await request.get("/users?name=Shruti");
      JSON.parse(res.text)[0].should.deep.equal(expected);
    });
  });

  describe("GET /api/users", () => {
    it("should return all users", async () => {
      const res = await request.get("/users");
      res.status.should.equal(200);
    });
  });

  describe("GET /api/POST", () => {
    it("should add data to users table ", async () => {
      const expected = {
        name: "NewUser2",
        country: "India",
        phone_number: "031111111",
        mob_number: "031111111",
        email: "test@test.com",
        skype_id: "test",
        line_id: "test",
        whatsapp_number: "test",
        viber_number: "test",
        native_language: "Hindi",
        lang_2: "English",
        lang_3: "German",
        availaibility: "hgdh",
        credits: 4,
        created_at: "2019-04-27T23:53:40.073Z",
      };
      const res = await request.post("/users").send(expected);

      const resNew = await request.get("/users?name=NewUser2");
      JSON.parse(resNew.text)[0].name.should.equal("NewUser2");
    });
  });
});
