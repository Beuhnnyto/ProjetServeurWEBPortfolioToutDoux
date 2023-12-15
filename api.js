const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

// Connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo-list"
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});
// Routes
app.get("/tasks", async (req, res) => {
    // Récupération de la liste des tâches
    const tasks = await Task.findAll();
  
    // Envoi de la réponse
    res.status(200).json(tasks);
  });
  app.post("/tasks", async (req, res) => {
    // Création d'une nouvelle tâche
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: false,
    });
  
    // Enregistrement de la tâche
    await task.save();
  
    // Envoi de la réponse
    res.status(201).json(task);
  });
  app.put("/tasks/:id", async (req, res) => {
    // Récupération de la tâche à mettre à jour
    const task = await Task.findById(req.params.id);
  
    // Mise à jour de la tâche
    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed;
  
    // Enregistrement de la tâche
    await task.save();
  
    // Envoi de la réponse
    res.status(200).json(task);
  });
  app.delete("/tasks/:id", async (req, res) => {
    // Récupération de la tâche à supprimer
    const task = await Task.findById(req.params.id);
  
    // Suppression de la tâche
    await task.delete();
  
    // Envoi de la réponse
    res.status(200).json("Task deleted");
  });
  
  app.listen(3000, () => {
    console.log("API listening on port 3000");
  });