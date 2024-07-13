const express = require('express');
const router = express.Router();
// const db = require('../db');
const db = require('../models/db')

// Create a task
router.post('/tasks', async (req, res) => {
  const { title, description,status  } = req.body;
  const [result] = await db.query('INSERT INTO tasks (title, description,status) VALUES (?, ?, ?)', [title, description,status || 'incomplete']);
  res.json({ id: result.insertId, title, description, status: status || 'incomplete' });
});

// Get all tasks
router.get('/tasks', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM tasks');
  res.json(rows);
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status  } = req.body;
  const [result] = await db.query('UPDATE tasks SET title = "", description = "", status  = ?  WHERE id = ?', [title, description, status, id]);
  res.json(result);
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
  await db.query('ALTER TABLE tasks AUTO_INCREMENT = 1',[id]);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
