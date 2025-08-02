import React, { useEffect, useState } from "react";
import "./styles/login-signup/loginSignup.css";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { getTransactions, addTransaction, deleteTransaction } from "./services/transactionService";



function App() {
  const [transactions, setTransactions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showSignup, setShowSignup] = useState(false);

  // Fetch transactions
  const fetchData = () => {
    getTransactions()
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  // Add/Delete Transaction
  const handleAddTransaction = (transaction) => {
    addTransaction(transaction).then(fetchData).catch(console.error);
  };
  const handleDeleteTransaction = (id) => {
    deleteTransaction(id).then(fetchData).catch(console.error);
  };

  // Income / Expense / Balance
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const netBalance = totalIncome - totalExpense;

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // Auth Pages
  if (!token) {
    return (
      <div className="auth-page auth-column">
        {showSignup ? (
          <>
            <Signup onSignupSuccess={() => setToken(localStorage.getItem("token"))} />
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setShowSignup(false)}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Login here
              </button>
            </p>
          </>
        ) : (
          <>
            <Login
              onLogin={() => setToken(localStorage.getItem("token"))}
              onShowSignup={() => setShowSignup(true)}
            />
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setShowSignup(true)}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign up here
              </button>
            </p>
          </>
        )}
      </div>
    );
  }

  // Dashboard Page
  return (
    <Dashboard
      totalIncome={totalIncome}
      totalExpense={totalExpense}
      netBalance={netBalance}
      transactions={transactions}
      onAddTransaction={handleAddTransaction}
      onDeleteTransaction={handleDeleteTransaction}
      onLogout={handleLogout}
    />
  );
}

export default App;
