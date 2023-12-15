const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

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

app.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send(rows);
  });
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  connection.query('INSERT INTO tasks (task) VALUES (?)', [task], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send(result);
  });
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send(result);
  });
});



app.listen(4000, () => {
  console.log('Server is running on port 3000');
});
