const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Initial tasks array - keeping the same initial data
const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// Root endpoint - Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
});

// POST endpoint to add a new task
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'text field is required' });
    }
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});

// GET endpoint to retrieve all tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});