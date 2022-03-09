// const mysql = require('mysql8');
// const createConnetion = (host, port, db, user, passs) => {
//     const connection = mysql.createConnection({
//         host: String(host),
//         database: String(db),
//         port: Number(port),
//         user: String(user),
//         password: String(passs),
//     });
//     connection.connect(error => {
//         if (error) throw error;
//         console.log("Successfully connected to the database.");
//     });
// }

// const connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'training',
//     port: '3306',
//     user: 'root',
//     password: 'root',
// });
// module.exports = { createConnetion,  connection }
'use strict';
const mysql = require('mysql8');
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST ,
  user: process.env.MYSQL_USERNAME ,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB 
});
db.connect(error => {
            if (error) throw error;
            console.log("Successfully connected to the database.");
        });
module.exports = db;
