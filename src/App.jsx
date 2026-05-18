import { use, useState } from 'react';
import './App.css';

const App = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expenseName.trim() === '' || Number(expenseAmount) <= 0) {
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      name: expenseName.trim(),
      amount: Number(expenseAmount),
      category: expenseCategory,
    };

    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newExpense];
      console.log(updatedExpenses);
      return updatedExpenses;
    });

    setExpenseName('');
    setExpenseAmount('');
    setExpenseCategory('Food')
    console.log(expenses);
  };

  const totalSpent = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => {
        return expense.id !== id;
      });
    });
  };

  return (
    <main className="page">
      <section className="tracker">
        <header className="tracker-header">
          <p className="eyebrow">React Practice Project</p>
          <h1 className="tracker-title">Expense Tracker</h1>

          <p className="tracker-description">
            Track your spending and practice working with React state, forms,
            and arrays.
          </p>
        </header>

        <section className="summary-card" aria-label="Expense Summary">
          <p className="summary-label">Total Spent</p>
          <p className="summary-total">${totalSpent.toFixed(2)}</p>
        </section>

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

        <section className="expense-list-section">
          <h2>Expenses</h2>

          {expenses.length === 0 ? (
            <p className="empty-state">No expenses added yet.</p>
          ) : (
            <ul className="expense-list">
              {expenses.map((expense) => {
                return (
                  <li className="expense-item" key={expense.id}>
                   <div>
                    <p>
                      {expense.name}
                    </p>
                    <small>
                      {expense.category}
                    </small>
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
      </section>
    </main>
  );
};

export default App;
