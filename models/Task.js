// models/Task.js

const db = require('../db');

async function getAllTasks() {
    const [rows] = await db.query('SELECT * FROM tasks');
    return rows;
}

async function createTask(task) {
    const { title, dueDate } = task;
    const [result] = await db.query('INSERT INTO tasks (title, due_date) VALUES (?, ?)', [title, dueDate]);
    return result.insertId;
}

module.exports = {
    getAllTasks,
    createTask
};
