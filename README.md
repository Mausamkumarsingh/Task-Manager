# 🚀 Full Stack Task Manager

A modern, full-stack Task Manager application built using **React, Node.js, and Express**.  
This project allows users to manage tasks efficiently with a clean UI and RESTful API integration.

---

## 📸 Preview

![Preview](preview.png)
---

## ✨ Features

- ✅ Create new tasks  
- ✔️ Mark tasks as completed  
- ❌ Delete tasks  
- 🔍 Filter tasks (All / Completed / Pending)  
- 💾 Persistent storage using JSON file  
- 🎨 Clean, modern UI with smooth interactions  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)  
- Axios  
- Lucide React (icons)  
- CSS (custom styling)  

### Backend
- Node.js  
- Express.js  
- CORS  

---

## 📂 Project Structure


Task Manager/
├── backend/
│ ├── controllers/
│ │ └── taskController.js
│ ├── data/
│ │ └── tasks.json
│ ├── routes/
│ │ └── taskRoutes.js
│ ├── package.json
│ └── server.js
│
└── frontend/
├── src/
│ ├── api/
│ │ └── taskApi.js
│ ├── components/
│ │ ├── FilterButtons.jsx
│ │ ├── TaskForm.jsx
│ │ └── TaskItem.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
└── package.json


---

## ⚙️ Setup & Run Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mausamkumarsingh/Task-Manager.git
cd Task-Manager
2️⃣ Run Backend
cd backend
npm install
npm start

Backend runs on:
👉 http://localhost:5000

3️⃣ Run Frontend

Open a new terminal:

cd frontend
npm install
npm run dev

Frontend runs on:
👉 http://localhost:5173

🔌 API Endpoints

| Method | Endpoint   | Description            |
| ------ | ---------- | ---------------------- |
| GET    | /tasks     | Get all tasks          |
| POST   | /tasks     | Create new task        |
| PATCH  | /tasks/:id | Toggle task completion |
| DELETE | /tasks/:id | Delete a task          |

⚖️ Design Decisions
. Used file-based JSON storage instead of a database to keep the project lightweight
. Focused on clean architecture and readability
. Maintained modular structure (controllers, routes, API separation)

🚧 Future Improvements
. Add database (MongoDB / PostgreSQL)
. Implement authentication
. Add edit/update functionality
. Add testing
. Deploy with Vercel + Render

👨‍💻 Author

Mausam Kumar
Full Stack Developer
