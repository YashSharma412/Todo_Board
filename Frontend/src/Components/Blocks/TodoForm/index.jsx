import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import URL from "../../../Constants/URL";
import "./styles.css";
import FormField from "../../Common/FormField";
import FormTextArea from "../../Common/FormTextArea";
import Button from "../../Common/Button";
import TodoContext from "../../../Contexts/Todo/TodoContext";
const TodoForm = () => {
  const { fetchTodos, edit, setEdit } = useContext(TodoContext);
  const [todoObj, setTodoObj] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    console.log("edit: ", edit);
  }, [edit, setEdit]);

  async function addTodo(event) {
    event.preventDefault();
    // console.log("obj: ", todoObj);
    try {
      const response = await axios.post(`${URL}/todos/createTodo`, todoObj, {
        withCredentials: true,
      });
      // console.log(response.data);
      await fetchTodos();
      setTodoObj({
        title: "",
        description: "",
        completed: false,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="todo__form-container">
      <h1 className="header text">{edit.status ? "Edit Todo" : "Add Todo"}</h1>
      <form className="todo__form" onSubmit={addTodo}>
        <section className="todo__form_body">
          <FormField
            type={"text"}
            className={"accent"}
            id={"todoTitle"}
            name={"todoTitle"}
            placeholder={"Todo Title"}
            labelTxt={"Todo Title"}
            value={todoObj.title}
            onChange={(e) => setTodoObj({ ...todoObj, title: e.target.value })}
            required
          />
          <FormTextArea
            className={"accent"}
            id={"todoDesc"}
            name={"todoDesc"}
            placeholder={"Todo Description"}
            labelTxt={"Todo Description"}
            value={todoObj.description}
            onChange={(e) =>
              setTodoObj({ ...todoObj, description: e.target.value })
            }
          />
        </section>
        <div className="todo btn__container">
          <Button
            type={"submit"}
            text={"Add Todo"}
            className={"accent"}
            style={{ margin: "20px 0 12px 0", width: "100%", height: "100%" }}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
