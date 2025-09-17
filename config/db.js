// COMMON JS WAY OF IMPORTANT AND EXPORTING
// require('dotenv').config();
// const mysql = require('mysql2/promise')

// const poll = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });
// module.exports = poll;

// ES MODULE WAY(more modern)
import 'dotenv/config';
import mysql from 'mysql2/promise';

const poll = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
export default poll;