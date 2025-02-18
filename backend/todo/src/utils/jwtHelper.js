const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Store in AWS SSM or ENV variables

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email }, // Payload
    SECRET_KEY,
    { expiresIn: "1h" } // Expiration time
  );
};

// Verify JWT Token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null; // Invalid token
  }
};

module.exports = { generateToken, verifyToken };
