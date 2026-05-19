import React from 'react';

const ExpenseList = ({
  selectCategory,
  setSelectedCategory,
  filteredExpenses,
  handleDeleteExpense,
}) => {
  return (
    <section className="expense-list-section">
      <h2>Expenses</h2>

      <div className="filter-row">
        <label htmlFor="category-filter">Filter by category</label>

        <select
          id="category-filter"
          value={selectCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {filteredExpenses.length === 0 ? (
        <p className="empty-state">
          {selectCategory === 'All'
            ? 'No Expenses added yet.'
            : `No ${selectCategory.toLowerCase()} expenses found.`}
        </p>
      ) : (
        <ul className="expense-list">
          {filteredExpenses.map((expense) => {
            return (
              <li className="expense-item" key={expense.id}>
                <div>
                  <p>{expense.name}</p>
                  <small>{expense.category}</small>
                </div>
                <strong>${expense.amount.toFixed(2)}</strong>

                <button
                  type="button"
                  onClick={() => handleDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ExpenseList;
