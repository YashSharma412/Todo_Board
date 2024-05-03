import React, { useContext } from "react";
import "./styles.css";
import TodoForm from "../../Blocks/TodoForm";
import Navbar from "../../Common/Navbar";
import TodoContainer from "../../Blocks/TodoContainer";

const TodoApp = () => {
  // const { fetchUser, logoutUser } = useContext(UserContext);
  return (
    <div className="todo__app">
      <Navbar />
      <div className="main__page">
        <TodoForm />
        <TodoContainer />
      </div>
    </div>
  );
};

export default TodoApp;
