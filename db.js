// db.js

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bbhde7knfc2rj4qsfxce-mysql.services.clever-cloud.com', // Replace with your Clever Cloud MySQL host
    user: 'u5dbrbdazmfsqymm', // Replace with your Clever Cloud MySQL user
    password: 'kcqCL8kmDFkEVDrB0sax', // Replace with your Clever Cloud MySQL password
    database: 'bbhde7knfc2rj4qsfxce', // Replace with your Clever Cloud MySQL database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
