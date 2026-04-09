import React from 'react';
import { Trash2, Check, FileText } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const isCompleted = task.completed;
  
  return (
    <div className="task-item-v2">
      <div className="task-item-left">
        <div className={`task-doc-icon ${isCompleted ? 'doc-green' : 'doc-orange'}`}>
          <FileText size={16} />
        </div>
        <span className={`task-title-v2 ${isCompleted ? 'title-completed' : ''}`}>
          {task.title}
        </span>
        <span className={`task-badge ${isCompleted ? 'badge-green' : 'badge-orange'}`}>
          {isCompleted ? 'Completed' : 'Pending'}
        </span>
      </div>
      
      <div className="task-item-right">
        <button 
          className={`action-btn check-btn ${isCompleted ? 'checked' : ''}`}
          onClick={() => onToggle(task.id)}
        >
          <Check size={20} strokeWidth={3} />
        </button>
        <button 
          className="action-btn delete-btn-v2"
          onClick={() => onDelete(task.id)}
        >
          <Trash2 size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
