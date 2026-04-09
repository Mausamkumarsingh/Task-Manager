import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <button 
        className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button 
        className={`filter-btn ${filter === 'Pending' ? 'active' : ''}`}
        onClick={() => setFilter('Pending')}
      >
        Pending
      </button>
      <button 
        className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
