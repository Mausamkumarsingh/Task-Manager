import React from 'react';
import { Search, Bell } from 'lucide-react';

const TopNav = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="topnav">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search tasks..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="topnav-right">
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <div className="avatar">
          <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
