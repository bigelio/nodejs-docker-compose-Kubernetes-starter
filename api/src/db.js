const { Pool } = require("pg");
require("dotenv").config()
const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.HOST,
});

module.exports = { pool };