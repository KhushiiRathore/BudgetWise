//# Handles transactions CRUD  -- CRUD for Transactions


// controllers/transactionController.js
const Transaction = require("../models/Transaction");

// @desc    Get all transactions for a logged-in user
// @route   GET /transactions
// @access  Private
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }); // Only user’s data
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Add new transaction
// @route   POST /transactions
// @access  Private
const addTransaction = async (req, res) => {
  const { type, amount, category, date } = req.body;

  try {
    const transaction = new Transaction({
      type,
      amount,
      category,
      date :new Date(date),
      user: req.user.id, // Link to logged-in user
    });

    const savedTransaction = await transaction.save();
    res.json(savedTransaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete transaction by ID
// @route   DELETE /transactions/:id
// @access  Private
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction,
};
