import React from 'react';
import { LayoutList, CheckCircle2, Hourglass, Settings, CheckCircle } from 'lucide-react';

const Sidebar = ({ filter, setFilter }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">
          <CheckCircle size={20} color="white" />
        </div>
        <h2>Task Manager</h2>
      </div>

      <nav className="sidebar-nav">
        <button 
          className={`nav-item ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          <LayoutList size={18} />
          <span>All Tasks</span>
        </button>
        <button 
          className={`nav-item ${filter === 'Completed' ? 'active' : ''}`}
          onClick={() => setFilter('Completed')}
        >
          <CheckCircle2 size={18} />
          <span>Completed</span>
        </button>
        <button 
          className={`nav-item ${filter === 'Pending' ? 'active' : ''}`}
          onClick={() => setFilter('Pending')}
        >
          <Hourglass size={18} />
          <span>Pending</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item">
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
