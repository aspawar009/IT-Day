import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.description}</strong> - ${expense.amount.toFixed(2)} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
