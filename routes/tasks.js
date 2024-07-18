// routes/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getAllTasks();
        res.json(tasks);
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({ error: 'Error fetching tasks' });
    }
});

// POST create a new task
router.post('/', async (req, res) => {
    try {
        const taskId = await Task.createTask(req.body);
        res.json({ id: taskId });
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({ error: 'Error creating task' });
    }
});

module.exports = router;
