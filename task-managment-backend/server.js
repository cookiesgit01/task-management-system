const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
// const db = require('./db');
const db = require('./models/db')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql9131',
  database: 'taskmanager'
});

const tasks = require('./routes/tasks');
app.use('/api', tasks);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
