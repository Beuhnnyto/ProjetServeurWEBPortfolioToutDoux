const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

var ports = [4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tasks.sql'
});

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
      </td><td>
        <form action="/${task.id}/delete" method="POST">
          <input type="submit" value="Delete">
        </form>


      </td></tr>`;
    });
    const table = `<table><tr><th>Title</th><th>Description</th><th>Done</th><th>Delete ?</th></tr>${tableRows}</table>`;
    
    const html = `
      <html>
        <head>
          <title>My todo list</title>
          <style>
          body {
            background-color: #222;
            color: #fff;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;

          }
        
          h1 {
            color: green;
          }
        
          table {
            border-collapse: separate;
            border: solid #fff 1px;
            border-radius: 6px;
          }
        
          td, th {
            border-left: solid #fff 1px;
            border-top: solid #fff 1px;
          }
        
          th {
            background-color: green;
            border-top: none;
            font-family: Roboto, sans-serif;

          }
        
          td:first-child, th:first-child {
            border-left: none;
          }
        
          input[type="text"], input[type="submit"] {
            color: #222;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
          }
        
          input[type="text"] {
            width: 200px;
            margin-right: 10px;
          }
        
          input[type="submit"] {
            margin-top: 10px;
          }
        
          a {
            color: white;
            text-decoration: none;
          }
        
          a:hover {
            color: lime;
            text-decoration: underline;
          }
          </style>
        </head>
        <body>
         <nav>
            <a href="https://portfolio.exemple.localhost">Portfolio</a>
        </nav>

          <h1>My todo list</h1>
          ${table}
          <br>
          
          <h2>Add a task</h2>
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

app.post('/:id/delete', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM tasks WHERE id = ${id}`;
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