# Full Stack Task Manager

A simple, modern, full-stack task manager application built with React, Node.js, and Express.

## Features

- **Create Tasks**: Quickly add new tasks
- **Mark as Completed**: Toggle completion status
- **Delete Tasks**: Remove tasks you no longer need
- **Filter**: View All, Pending, or Completed tasks
- **Data Persistence**: Uses a simple file-based JSON storage on the backend
- **Beautiful UI**: Modern dark-mode aesthetic with micro-animations

## Tech Stack

- **Frontend**: React, Vite, Axios, Lucide React (for icons)
- **Backend**: Node.js, Express, CORS

## Project Structure

```
Task Manager/
├── backend/                  # Node.js backend
│   ├── components/           # (N/A for backend, typical Express structure)
│   ├── controllers/          # Request handlers
│   │   └── taskController.js
│   ├── data/                 # JSON file storage
│   │   └── tasks.json
│   ├── routes/               # Express routes
│   │   └── taskRoutes.js
│   ├── package.json          # Backend dependencies
│   └── server.js             # Entry point
│
└── frontend/                 # React frontend
    ├── src/
    │   ├── api/
    │   │   └── taskApi.js    # Axios configuration
    │   ├── components/       # Reusable UI components
    │   │   ├── FilterButtons.jsx
    │   │   ├── TaskForm.jsx
    │   │   └── TaskItem.jsx
    │   ├── App.jsx           # Main application state
    │   ├── index.css         # Global styles and design system
    │   └── main.jsx          # Entry point
    └── package.json          # Frontend dependencies
```

## Setup Instructions

### 1. Start the Backend

Open a terminal and navigate to the `backend` folder:

```bash
cd backend
npm install
npm start
```
The backend API will run on `http://localhost:5000`.

### 2. Start the Frontend

Open a new terminal and navigate to the `frontend` folder:

```bash
cd frontend
npm install # if not already installed
npm run dev
```

The React app will be available at `http://localhost:5173` (or another port specified by Vite).

## API Endpoints

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task (expects `{ "title": "Task name" }`)
- `PATCH /tasks/:id` - Toggle task completion status
- `DELETE /tasks/:id` - Delete a task by ID
