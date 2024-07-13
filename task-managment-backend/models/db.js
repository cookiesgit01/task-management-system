const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql9131',
  database: 'taskmanager'
});

module.exports = pool.promise();
