const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route configurations
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.patch('/:id', taskController.toggleTaskCompletion);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
