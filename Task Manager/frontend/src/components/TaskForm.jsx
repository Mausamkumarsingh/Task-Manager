import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="task-form-container">
      <form className="task-form-v2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input-v2"
          placeholder="Add New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="submit-btn-v2" disabled={!title.trim()}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
