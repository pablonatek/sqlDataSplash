const mysql =  require('mysql2/promise');
const config = require('./config.json');

return mysql.createConnection(config);