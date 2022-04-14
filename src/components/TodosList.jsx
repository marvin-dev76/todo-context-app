import React from "react";
import Todo from "./Todo";
import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";
import "./TodosList.css";

const TodosList = () => {
  const { todos } = useContext(TodosContext);

  const sortedTodos = todos.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="todos-list">
      {todos.length === 0 ? (
        <div>
          <p className="todos-list-title">Add TO-DO's for your day. 📗</p>
        </div>
      ) : (
        sortedTodos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.todoTitle}
            id={todo.id}
            isCompleted={todo.completed}
          />
        ))
      )}
    </div>
  );
};

export default TodosList;
