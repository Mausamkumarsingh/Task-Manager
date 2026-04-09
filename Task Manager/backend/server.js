const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(`[Error] ${req.method} ${req.url}:`, err.message);
  
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ 
    error: err.message || 'Internal Server Error' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
