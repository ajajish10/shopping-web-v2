// Backend/server.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 3001;

const app = express();
app.use(cors());

app.get('/',(req,res) => {
  return res.json('Welcome to the Music Store API!');
})

app.listen(port ,() => {
  console.log(`Server is running on http://localhost:${port}`);
})