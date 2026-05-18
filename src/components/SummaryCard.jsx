import React from 'react';

const SummaryCard = ({ totalSpent }) => {
  return (
    <section className="summary-card" aria-label="Expense summary">
      <p className="summary-label">Total Spent</p>
      <p className="summary-total">${totalSpent.toFixed(2)}</p>
    </section>
  );
};

export default SummaryCard;
