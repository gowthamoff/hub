const express = require("express");
const cors = require("cors");
const todoHandler = require("./handlers/todoHandler");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/todos", todoHandler.createTodo);
app.get("/todos", todoHandler.listTodos);
app.get("/todos/:id", todoHandler.getTodo);
app.put("/todos/:id", todoHandler.updateTodo);
app.delete("/todos/:id", todoHandler.deleteTodo);

// Error handling
app.use(errorHandler);

module.exports = app;
