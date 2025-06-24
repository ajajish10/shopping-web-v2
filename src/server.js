// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

// MySQL configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "your_database_name"
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Example API route
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
