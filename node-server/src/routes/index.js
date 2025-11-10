const express = require('express');
const router = express.Router();

const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/tasks', (req, res) => {
  const { text } = req.body;
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

router.get('/tasks', (req, res) => {
  res.json({ tasks });
});

module.exports = router;