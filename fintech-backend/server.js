// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/transactions", require("./routes/transactionRoutes"));
app.use("/auth", require("./routes/authRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("Fintech Backend API Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
