import React from "react";
import TodosForm from "./TodosForm";
import TodosList from "./TodosList";
import Navbar from "./Navbar";
import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";

const TodoApp = () => {
  const { theme } = useContext(TodosContext);

  return (
    <div className={`background ${theme}`}>
      <Navbar />
      <div className="row container">
        <TodosForm />
        <TodosList />
      </div>
    </div>
  );
};

export default TodoApp;
