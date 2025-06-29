// Backend/server.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
//const port = 3001;

const app = express();
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'uswername', // Replace with your MySQL username
  password: 'password',
  //database: 'YOUR_DATABASE_NAME'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL User.');
});
