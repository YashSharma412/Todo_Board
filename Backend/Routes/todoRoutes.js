const express = require("express");
const isAuthorized = require("../Middlewares/isAuthorized");
const { createNewTodo, getTodos, markCompleted, deleteTodo, updateTodo } = require("../Controllers/todoController");
const  todoRoutes = express.Router();

todoRoutes.post("/createTodo", isAuthorized, createNewTodo);
todoRoutes.get("/getTodos", isAuthorized, getTodos);
todoRoutes.post("/markCompleted", isAuthorized, markCompleted);
todoRoutes.post("/deleteTodo", isAuthorized, deleteTodo);
todoRoutes.post("/updateTodo", isAuthorized, updateTodo);

module.exports = todoRoutes;