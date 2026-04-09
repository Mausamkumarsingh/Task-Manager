import React, { useState, useEffect } from 'react';
import { getTasks, createTask, toggleTask, deleteTask } from './api/taskApi';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import SummaryCards from './components/SummaryCards';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const showError = (msg, err = null) => {
    const detail = err?.response?.data?.error ? `: ${err.response.data.error}` : '';
    setError(`${msg}${detail}`);
    setTimeout(() => setError(null), 5000);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      setTasks(response.data);
      setError(null);
    } catch (err) {
      showError('Failed to fetch tasks', err);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    try {
      const response = await createTask(title);
      setTasks([...tasks, response.data]);
    } catch (err) {
      showError('Failed to add task', err);
      console.error('Error adding task:', err);
    }
  };

  const handleToggleTask = async (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    try {
      await toggleTask(id);
    } catch (err) {
      fetchTasks();
      showError('Failed to update task', err);
    }
  };

  const handleDeleteTask = async (id) => {
    const previousTasks = [...tasks];
    setTasks(tasks.filter(task => task.id !== id));
    try {
      await deleteTask(id);
    } catch (err) {
      setTasks(previousTasks);
      showError('Failed to delete task', err);
    }
  };

  const filteredTasks = tasks.filter(task => {
    // Stage 1: Sidebar filter
    if (filter === 'Completed' && !task.completed) return false;
    if (filter === 'Pending' && task.completed) return false;
    // Stage 2: Search filter
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="layout">
      <Sidebar filter={filter} setFilter={setFilter} />
      
      <main className="main-content">
        <TopNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="content-inner">
          {error && <div className="error-toast">{error}</div>}
          
          <SummaryCards tasks={tasks} />
          
          <TaskForm onAdd={handleAddTask} />
          
          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : (
            <div className="task-list-v2">
              {filteredTasks.length === 0 ? (
                <div className="empty-state">
                  No tasks found.
                </div>
              ) : (
                filteredTasks.map(task => (
                  <TaskItem 
                    key={task.id} 
                    task={task} 
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
