const fs = require('fs').promises;
const path = require('path');


const dataFilePath = path.join(__dirname, '../data/tasks.json');

// Helper function to read tasks
const readTasks = async () => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    if (!data || !data.trim()) return [];
    
    try {
      return JSON.parse(data);
    } catch (parseError) {
      console.error('Data file contains invalid JSON, resolving to empty array:', parseError);
      return [];
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, return empty array
      return [];
    }
    throw error;
  }
};

// Helper function to write tasks
const writeTasks = async (tasks) => {
  await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// POST /tasks
exports.createTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    
    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'Title is required and must not be empty' });
    }

    const newTask = {
      id: Date.now().toString(), // Simple unique id generator, keeping it lightweight
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    const tasks = await readTasks();
    tasks.push(newTask);
    await writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// PATCH /tasks/:id
exports.toggleTaskCompletion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await readTasks();
    
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Toggle completion status
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    await writeTasks(tasks);

    res.status(200).json(tasks[taskIndex]);
  } catch (error) {
    next(error);
  }
};

// DELETE /tasks/:id
exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await readTasks();
    
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    await writeTasks(tasks);

    res.status(200).json({ message: 'Task deleted successfully', id });
  } catch (error) {
    next(error);
  }
};
