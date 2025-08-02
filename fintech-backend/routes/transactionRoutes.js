
// routes/transactionRoutes.js
const express = require("express");
const router = express.Router();

const { getTransactions, addTransaction, deleteTransaction } = require("../controllers/transactionController");
const authMiddleware = require("../middlewares/authMiddleware");

// ✅ All routes protected with authMiddleware
router.get("/", authMiddleware, getTransactions);
router.post("/", authMiddleware, addTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);

module.exports = router;
