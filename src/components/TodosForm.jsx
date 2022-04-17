import React, { useState, useContext, useEffect } from "react";
import "./TodosForm.css";
import { IoIosAdd } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { TiCancelOutline } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";

import { TodosContext } from "../context/TodosContext";
import { v4 } from "uuid";

const TodosForm = () => {
  const [todoTitle, setTodoTitle] = useState("");

  let { todos, addTodo, selectedTodo, deselectTodo, editTodo, completeTodos } =
    useContext(TodosContext);

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    if (todoTitle === "") {
      return;
    }

    if (selectedTodo) {
      editTodo({
        id: selectedTodo.id,
        todoTitle: todoTitle,
      });
      deselectTodo(e);
    } else {
      addTodo({
        id: v4(),
        todoTitle: todoTitle,
        completed: false,
        date,
      });
    }
    setTodoTitle("");
  };

  useEffect(() => {
    if (selectedTodo) {
      setTodoTitle(selectedTodo.todoTitle);
      return;
    }
    setTodoTitle("");
  }, [selectedTodo]);

  const _deselectedTodo = (e) => {
    e.preventDefault();
    deselectTodo();
  };

  const _completeTodos = (e) => {
    e.preventDefault();
    completeTodos(todos);
  };

  return (
    <div className="todo-form">
      <h1>What&apos;s up! 👋</h1>
      <form className="todo-form-container">
        <label>
          {selectedTodo ? "Add new TO-DO title" : "Add TO-DO title:"}{" "}
        </label>
        <input
          type="text"
          placeholder="// Example: Buy fruits 🍏"
          className="todo-title"
          value={todoTitle}
          onChange={(e) => handleChange(e)}
        />
        <div className="buttons">
          <button
            className={selectedTodo ? "edit-btn" : "add-btn"}
            onClick={(e) => handleSubmit(e)}
          >
            {selectedTodo ? (
              <RiPencilLine size={28} color={"var(--primary)"} />
            ) : (
              <IoIosAdd size={28} color={"var(--bg)"} />
            )}
            {selectedTodo ? "Confirm edit" : "Add TO-DO"}
          </button>
          {selectedTodo ? (
            <button className="cancel-btn" onClick={(e) => _deselectedTodo(e)}>
              <TiCancelOutline size={28} color={"var(--bg)"} />
              Cancel edit
            </button>
          ) : (
            <></>
          )}
        </div>
        <button className="complete-btn" onClick={(e) => _completeTodos(e)}>
          <AiOutlineCheck size={24} color={'var(--bg)'} />
          Clear completed TO-DO's
        </button>
      </form>
    </div>
  );
};

export default TodosForm;
