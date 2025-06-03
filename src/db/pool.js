const { Pool } = require('pg');

module.exports = new Pool({
    host: process.env.PGHOST,
    user: process.env.USER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})