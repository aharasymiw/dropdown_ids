const pg = require('pg');

let pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'dropdown_ids',   // 	💥 Change this to the name of your database!
});

module.exports = pool;
