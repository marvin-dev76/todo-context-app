import React from "react";
import "./App.css";
import TodosState from "./context/TodosContext";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodosState>
      <TodoApp />
    </TodosState>
  );
}

export default App;
