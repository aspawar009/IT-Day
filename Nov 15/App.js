import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense to the list
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Calculate the total amount of all expenses
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
}

export default App;
