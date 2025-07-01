// Backend/server.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce_db' ,
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL.');

  // Path to your SQL file
  const sqlFilePath = path.join(__dirname, '../public/db.sql');
  console.log('SQL file path:', sqlFilePath);

  // Read and execute SQL file after DB connection
  fs.readFile(sqlFilePath, 'utf8', (err, sql) => {
    if (err) {
      console.error('Failed to read SQL file:', err);
      return;
    }
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Failed to execute SQL file:', err);
        return;
      }
      console.log('SQL file executed successfully.');
    });
  });
});

// Your routes go here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
