import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoContext from "./TodoContext";
import URL from "../../Constants/URL";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    status: false,
    todoId: "",
    oldTitle: "",
    oldDesc: "",
  });


  async function fetchTodos() {
    try {
      const response = await axios.get(`${URL}/todos/getTodos`, {
        withCredentials: true,
      })
      if (response.data.status !== 200) {
        throw new Error(response.data.message);
      }
      setTodos(response.data.data);
      // console.log(response.data.data);
    } catch (err){
      console.log(err);
    }
  }

  async function markAsCompleted( todoId ,comp ) {
    // console.log(todoId)
    try{
      const response = await axios.post(`${URL}/todos/markCompleted`, { todoId, comp }, { withCredentials: true });
      if (response.data.status !== 200) {
        throw new Error(response.data.message);
      }
      // console.log(response.data.data);
      await fetchTodos();
    } catch (err){
      console.log(err);
    }
  }

  async function deleteTodo( todoId ) {
    try{
      const response = await axios.post(`${URL}/todos/deleteTodo`, { todoId }, { withCredentials: true });
      if (response.data.status !== 200) {
        throw new Error(response.data.message);
      }
      // console.log(response.data.data);
      await fetchTodos();
    } catch (err){
      console.log(err);
    }
  }
  return (
    <TodoContext.Provider value={{ todos, setTodos, fetchTodos, markAsCompleted, deleteTodo, edit, setEdit }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
