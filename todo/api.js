const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
var ports = [4000,4001,4002,4003,4004,4005,4006,4007,4008,4009]
//use express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tasks.sql'
});


// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/tasks', (req, res) => {
  console.log(req.body);
  title = req.body.title;
  description = req.body.description;

  const query = `INSERT INTO tasks (title, description, done) VALUES ('${title}', '${description}', 0)`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    res.send(results);
  });
});

ports.forEach(port => {
  app.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
  });
});