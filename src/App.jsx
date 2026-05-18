import { useState, useEffect } from 'react';
import './App.css';
import SummaryCard from './components/summaryCard.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';

const App = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');

    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [expenseCategory, setExpenseCategory] = useState('Food');
  const [selectCategory, setSelectedCategory] = useState('All');

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
    setExpenseCategory('Food');
    console.log(expenses);
  };

  const totalSpent = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const filteredExpenses =
    selectCategory === 'All'
      ? expenses
      : expenses.filter((expense) => {
          return expense.category === selectCategory;
        });

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => {
        return expense.id !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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

        <SummaryCard totalSpent={totalSpent} />

        <ExpenseForm
          handleSubmit={handleSubmit}
          expenseName={expenseName}
          setExpenseName={setExpenseName}
          expenseAmount={expenseAmount}
          setExpenseAmount={setExpenseAmount}
          expenseCategory={expenseCategory}
          setExpenseCategory={setExpenseCategory}
        />

        <ExpenseList
          selectCategory={selectCategory}
          setSelectedCategory={setSelectedCategory}
          filteredExpenses={filteredExpenses}
          handleDeleteExpense={handleDeleteExpense}
        />
      </section>
    </main>
  );
};

export default App;
