import './App.css';

const App = () => {
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
          <p className="summary-total">$0.00</p>
        </section>
      </section>
    </main>
  );
};

export default App;
