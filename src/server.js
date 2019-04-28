const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const environment = process.env.NODE_ENV || "development";
const config = require("../config");
const knex = require("knex")(config.db);
const listUsers = require("../db/users/list");
const listUsersByLanguage = require("../db/users/listByLanguage");
const deleteByQueryParam = require("../db/users/deleteByQueryParam");
const listByQueryParam = require("../db/users/listByQueryParam");
const createUser = require("../db/users/createUser");
const listLanguages = require("../db/languages/list");

const setUpServer = () => {
  app.use(express.json());

  app.use(express.static("assets"));
  app.get("/", function(req, res) {
    res.sendFile("/Users/shru/Desktop/trans-no-late/index.html");
  });
  app.get("/api/users", (req, res) => {
    if (req.query) {
      listByQueryParam(knex, req.query)()
        .then((allUsers) => res.status(200).send(allUsers))
        .catch((err) => res.sendStatus(400));
    } else {
      listUsers(knex)()
        .then((allUsers) => res.status(200).send(allUsers))
        .catch((err) => res.sendStatus(400));
    }
  });

  app.post("/api/users", urlEncodedParser, (req, res) => {
    createUser(knex, req.body)()
      .then(() => res.status(200).send("Inserted"))
      .catch((err) => res.sendStatus(400));
  });

  app.get("/api/users/:lang", (req, res) => {
    listUsersByLanguage(knex, req.params.lang)()
      .then((allUsers) => res.status(200).send(allUsers))
      .catch((err) => res.sendStatus(400));
  });

  app.delete("/api/users", (req, res) => {
    console.log(req.query);
    deleteByQueryParam(knex, req.query)()
      .then((allUsers) => res.status(200).send("Deleted"))
      .catch((err) => res.sendStatus(400));
  });

  app.get("/api/languages", (req, res) => {
    listLanguages(knex)()
      .then((allLanguages) => res.status(200).send(allLanguages))
      .catch((err) => res.sendStatus(400));
  });

  return app;
};

module.exports = { setUpServer };
