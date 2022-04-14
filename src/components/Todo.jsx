import React from "react";
import "./Todo.css";
import { AiOutlineDelete } from "react-icons/ai";
import { RiPencilLine } from "react-icons/ri";

import { useContext, useRef } from "react";
import { TodosContext } from "../context/TodosContext";

const Todo = ({ title, id, isCompleted }) => {
  const { deleteTodo, completeTodo, selectTodo } = useContext(TodosContext);

  const todoRef = useRef();
  const _deleteTodo = () => {
    todoRef.current.classList.add("deleted");
    setTimeout(() => {
      deleteTodo(id);
    }, 500);
  };

  return (
    <div className="todo" ref={todoRef}>
      <div className="title-container">
        <input
          type="checkbox"
          onChange={(e) => completeTodo(id)}
          defaultChecked={isCompleted}
        />
        <p
          className={
            isCompleted ? "completed todo-title-card" : "todo-title-card"
          }
        >
          {title}
        </p>
      </div>
      <div className="buttons-container">
        <div className="delete" onClick={() => _deleteTodo()}>
          <AiOutlineDelete color={"var(--bg)"} size={24} />
        </div>
        <div className="edit" onClick={() => selectTodo(id)}>
          <RiPencilLine color={"var(--bg)"} size={24} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
