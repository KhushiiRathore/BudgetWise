import React from 'react';
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";


function SummaryCards({ totalIncome, totalExpense, netBalance }) {
  return (
    <div className="summary">
      <div className="card income">
        <h3>Income</h3>
        <p>₹{totalIncome}</p>
      </div>
      <div className="card expense">
        <h3>Expense</h3>
        <p>₹{totalExpense}</p>
      </div>
      <div className="card balance">
        <h3>Balance</h3>
        <p>₹{netBalance}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
