import React from 'react';
import { Check, Clock } from 'lucide-react';

const SummaryCards = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="summary-cards">
      <div className="card total-card">
        <div className="card-content">
          <div className="card-title">Total Tasks</div>
          <span className="card-number">{total}</span>
        </div>
        <div className="card-bg-icon">E</div>
      </div>

      <div className="card completed-card">
        <div className="card-content">
          <div className="card-title">Completed Tasks</div>
          <span className="card-number">{completed}</span>
        </div>
        <div className="card-icon green-icon">
          <Check size={28} strokeWidth={3} color="white" />
        </div>
      </div>

      <div className="card pending-card">
        <div className="card-content">
          <div className="card-title">Pending Tasks</div>
          <span className="card-number">{pending}</span>
        </div>
        <div className="card-icon yellow-icon">
          <Clock size={28} strokeWidth={2.5} color="white" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
