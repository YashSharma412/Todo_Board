import React, { useContext } from "react";
import "./styles.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdRemoveDone } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import TodoButton from "../../Common/TodoButton";
import TodoContext from "../../../Contexts/Todo/TodoContext";
const Todo = ({ completed, title, description, date, time, todoId }) => {

  const {markAsCompleted, deleteTodo, edit, setEdit} = useContext(TodoContext);
  function handleEdit({todoId, title, description}){ 
    setEdit({
      status: !edit.status,
      todoId,
      oldTitle: title,
      oldDesc: description
    })
  }
  return (
    <div className={`todo__box ${completed ? "completed" : ""}`}>
        <div className="todo__header">
          <h1 className="text">{title}</h1>
          <div className="createdAt">
            <div>{date}</div>
            <div>{time}</div>
          </div>
        </div>
        <hr className="line"/>
      <div className="todo__body">
        <p className="description text">{description}</p>
        <div className="todo__options" id={todoId}>
          <TodoButton onClick={() => markAsCompleted(todoId, completed)}>
            { completed ? 
              <MdRemoveDone /> : 
              <MdOutlineDoneAll />
            }
          </TodoButton>
          <TodoButton onClick={() => handleEdit({todoId, title, description})}>
            <FaEdit />
          </TodoButton>
          <TodoButton onClick={() => deleteTodo(todoId)}>
            <RiDeleteBin6Line />
          </TodoButton>
        </div>
      </div>
    </div>
  );
};

export default Todo;
