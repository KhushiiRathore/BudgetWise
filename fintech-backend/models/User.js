//User schema


// models/User.js
const mongoose = require("mongoose");

// Schema for user authentication
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Full name of the user

  email: { type: String, required: true, unique: true }, // Email (must be unique)

  password: { type: String, required: true } // Hashed password
  
});

module.exports = mongoose.model("User", userSchema);
