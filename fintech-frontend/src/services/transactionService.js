// src/services/transactionService.js
import axios from "axios";

const API_URL = "http://localhost:5000/transactions"; // Backend endpoint

// Function to attach JWT token from localStorage to headers
const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}` // Send token in request
  }
});

// Get all transactions (only for logged-in user)
export const getTransactions = () => 
  axios.get(API_URL, getAuthHeaders());

// Add a new transaction
export const addTransaction = (transaction) => 
  axios.post(API_URL, transaction, getAuthHeaders());

// Delete a transaction by ID
export const deleteTransaction = (id) => 
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());
