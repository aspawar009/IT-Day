import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <strong>{expense.description}</strong> - ${expense.amount.toFixed(2)} on {expense.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
