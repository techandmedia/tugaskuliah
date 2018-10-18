const mysql = require('mysql')

const connectionMySQL = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'andri',
  password: '123',
  database: 'tugaskuliah'
});

module.exports = connectionMySQL;