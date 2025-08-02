// Transaction schema

// models/Transaction.js
const mongoose = require("mongoose");

// Schema for financial transactions
const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Income or Expense

  amount: { type: Number, required: true }, // Amount in currency

  category: { type: String, required: true }, // e.g. Salary, Food

  date: { type: Date, default: Date.now }, // date

  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Linked to logged-in user
  
});

module.exports = mongoose.model("Transaction", transactionSchema);
