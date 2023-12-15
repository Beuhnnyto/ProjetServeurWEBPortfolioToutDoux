const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

var ports = [4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009];

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

app.get('/', (_, res) => {
  const query = 'SELECT * FROM tasks';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    let tableRows = '';
    results.forEach(task => {
      tableRows += `<tr><td>${task.title}</td><td>${task.description}</td><td>
        <form action="/${task.id}" method="POST">
          <input type="checkbox" name="done" onchange="this.form.submit()" ${task.done ? 'checked' : ''}>
        </form>

      </td></tr>`;
    });
    const table = `<table><tr><th>Title</th><th>Description</th><th>Done</th></tr>${tableRows}</table>`;
    
    const html = `
      <html>
        <head>
          <title>Tasks</title>
          <style>
            table {
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid black;
              padding: 5px;
            }
            th {
              background-color: #4CAF50;
              color: white;
            }
          </style>
        </head>
        <body>
          <h1>Tasks</h1>
          ${table}
          <form action="/" method="POST">
            <input type="text" name="title" placeholder="Title" required>
            <input type="text" name="description" placeholder="Description" required>
            <input type="submit" value="Add task">
          </form>
        </body>
      </html>
    `;
    res.send(html);



  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;

  const query = `INSERT INTO tasks (title, description, done) VALUES ('${title}', '${description}', 0)`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    
    res.redirect('/');
  });
});

app.post('/:id', (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  const query = `UPDATE tasks SET done = ${done ? 1 : 0} WHERE id = ${id}`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    
    res.redirect('/');
  });
}
);


ports.forEach(port => {
  app.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
  });
});