 import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction =({ type, amount: Number(amount), category ,date:new Date(date) });
    console.log("Submitting transaction:", newTransaction); // ✅ Debug
    onAddTransaction(newTransaction);
    setAmount('');
    setCategory('Food');
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

        {/* Category */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Salary">Salary</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Rent">Rent</option>
        <option value="Water">Water</option>

      </select>

      

      {/* ✅ Date Picker */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
