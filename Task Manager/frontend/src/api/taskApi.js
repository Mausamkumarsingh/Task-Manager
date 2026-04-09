import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/tasks',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getTasks = () => api.get('/');
export const createTask = (title) => api.post('/', { title });
export const toggleTask = (id) => api.patch(`/${id}`);
export const deleteTask = (id) => api.delete(`/${id}`);

export default api;
