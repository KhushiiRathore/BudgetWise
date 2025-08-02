// src/components/Dashboard.js
import React, { useState } from "react";
import "../styles/dashboard/dashboard.css";
import SummaryCards from "./SummaryCards";
import PieChart from "./PieChart";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";
import ProfileMenu from "./ProfileMenu";

function Dashboard({
  totalIncome,
  totalExpense,
  netBalance,
  transactions,
  onAddTransaction,
  onDeleteTransaction,
  onLogout
}) {
  return (
    <div className="dashboard">


      {/* ✅ Top Bar */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "15px" }}>
        <ProfileMenu /> 
        <button onClick={onLogout} style={{ padding: "6px 12px", background: "red", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>
          Logout
        </button>
      </div>

      <h1>💰 Finance App</h1>

      {/* Summary of Income/Expense/Balance */}
      <SummaryCards
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        netBalance={netBalance}
      />

      {/* Chart */}
      <div className="pie-chart-container">
        <PieChart totalIncome={totalIncome} totalExpense={totalExpense} />
      </div>

     
         {/* Add Transaction Form */}
      <TransactionForm onAddTransaction={onAddTransaction} />


      {/* Transactions Table */}
      <TransactionTable
        transactions={transactions}
        onDelete={onDeleteTransaction}
      />
    </div>
  );
}

export default Dashboard;
