const jwt = require("jsonwebtoken");
const Task = require("../model/taskModel");

const secretKey = "hello123";
const generateToken = (title) => {
  return jwt.sign(
    {
      id: Task.title,
    },
    secretKey,
    { expiresIn: "48h" }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };
