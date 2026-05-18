import React from 'react';

const ExpenseForm = ({
  handleSubmit,
  expenseName,
  setExpenseName,
  expenseAmount,
  setExpenseAmount,
  expenseCategory,
  setExpenseCategory,
}) => {
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="expense-name">Expense Name</label>
        <input
          type="text"
          id="expense-name"
          placeholder="Coffee, groceries..."
          value={expenseName}
          onChange={(e) => {
            setExpenseName(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="expense-amount">Amount</label>
        <input
          type="number"
          id="expense-amount"
          placeholder="$25.00"
          value={expenseAmount}
          onChange={(e) => {
            setExpenseAmount(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="expense-category">Category</label>
        <select
          id="expense-category"
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
