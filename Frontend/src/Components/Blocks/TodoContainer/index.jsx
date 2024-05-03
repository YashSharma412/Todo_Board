import React, { useContext, useEffect } from "react";
import "./styles.css";
import TodoContext from "../../../Contexts/Todo/TodoContext";
import Todo from "../Todo";
const TodoContainer = () => {
  const { todos, fetchTodos } = useContext(TodoContext);
  useEffect(()=>{
    fetchTodos();
  }, []);
  return (
    <div className="todos__container">
      {todos.length === 0 ?
        <p className="no__todos">No Todos added yet...</p> :
        todos.map((todo, idx) => (
          <Todo 
            title={todo.title}
            description={todo.description}
            date={new Date(todo.createdAt).toDateString()}
            time={new Date(todo.createdAt).toLocaleTimeString()}
            completed={todo.completed}
            todoId={todo._id}
            key={idx}
          />
        ))
      }
    </div>
  );
};

export default TodoContainer;

{/* <Todo
  title={"todo title"}
  description={
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil temporibus atque ad, a porro mollitia quo dolorum ratione."
  }
  date={new Date().toDateString()}
  time={new Date().toLocaleTimeString()}
  completed={false}
  todoId="828228"
/>  */}