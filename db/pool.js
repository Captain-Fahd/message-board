const { Pool } = require('pg');

console.log("host " + process.env.PGHOST);
console.log("user " + process.env.PGUSER);
console.log("database " + process.env.PGDATABASE);
console.log("password " + process.env.PGPASSWORD);
console.log("port " + process.env.PGPORT);

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL
})