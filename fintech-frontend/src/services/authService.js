// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/auth";

// singup a new user
export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);

// Login existing user
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
