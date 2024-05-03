const validateTodoData = require("../Functions/validateTodoData");
const Todo = require("../Models/Todo");
const createNewTodo = async (req, res) => {
  const { title, description } = req.body;
  const { username, name } = req.session.user;

  //TODO: Step1> validating data:
  try {
    await validateTodoData({ title, description });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: 422,
      message: err,
    });
  }

  //TODO: Step2> create new todo
  try {
    const newTodo = new Todo({
      title,
      description,
      username,
    });
    const todoDoc = await newTodo.createTodo();
    console.log(todoDoc);

    return res.status(201).json({
      status: 201,
      message: "Todo created successfully",
      data: todoDoc,
    });
  } catch (err) {
    return res.status(err.status).json(err);
  }
};

const getTodos = async (req, res) => {
  const { username } = req.session.user;
  try {
    const todosList = await Todo.fetchTodos({ username });
    return res.status(200).json({
      status: 200,
      message: "Todos fetched successfully",
      data: todosList,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.status).json({
      status: 500,
      message: `${err.message}`,
    });
  }
};

const markCompleted = async (req, res) => {
  const { todoId, comp } = req.body;
  // console.log(todoId);
  try {
    // console.log("test")
    const todoDoc = await Todo.markAsCompleted({ todoId, comp });
    console.log(todoDoc);
    return res.status(200).json({
      status: 200,
      message: "Todo marked as completed successfully",
      data: todoDoc,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.status).json(err);
  }
};

const deleteTodo = async (req, res) => {
  const { todoId } = req.body;
  try {
    const todoDoc = await Todo.deleteTodo({ todoId });
    return res.status(200).json({
      status: 200,
      message: "Todo deleted successfully",
      data: todoDoc,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.status).json(err);
  }
};

const updateTodo = async (req, res) => {
  const { todoId, title, description } = req.body;
  //TODO: Step1> validating data:
  try {
    await validateTodoData({ title, description });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: 422,
      message: err,
    });
  }
  try {
    const todoDoc = await Todo.updateTodo({ todoId, title, description });
    return res.status(200).json({
      status: 200,
      message: "Todo updated successfully",
      data: todoDoc,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.status).json(err);
  }
};

module.exports = {
  createNewTodo,
  getTodos,
  markCompleted,
  deleteTodo,
  updateTodo,
};
