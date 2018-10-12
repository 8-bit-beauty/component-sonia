require("dotenv").config();
const { Client } = require("pg");
const client = new Client({
  user: "power_user",
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASS,
  database: "amazonrelated",
  port: 5432
});

module.exports = client;

// const { Client } = require("pg");
// const client = new Client({
//   user: "postgres",
//   database: "amazonRelated",
//   port: 5432
// });
