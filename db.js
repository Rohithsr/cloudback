// db.js

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bippeazoui0cugcsxdd3-mysql.services.clever-cloud.com', // Replace with your Clever Cloud MySQL host
    user: 'uehnjdy4m4lcnubp', // Replace with your Clever Cloud MySQL user
    password: 'toU9B1tQCeY1WIU66F6c', // Replace with your Clever Cloud MySQL password
    database: 'bippeazoui0cugcsxdd3', // Replace with your Clever Cloud MySQL database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
