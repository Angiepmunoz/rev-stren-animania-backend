const pgp = require("pg-promise")();
require("dotenv").config();

const {PG_USER, PG_HOST, PG_PORT, PG_DATABASE} = process.env;

const cn = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE
}
const db = pgp(cn); 

module.exports = db;
