import React, { createContext, useEffect, useState, useReducer } from "react";
import todosReducer from "./TodosReducer";

export const TodosContext = createContext();

const TodosState = ({ children }) => {
  let initialTodos =
    localStorage.getItem("todos") === null
      ? []
      : JSON.parse(localStorage.getItem("todos"));

  const initialState = {
    todos: initialTodos,
  };

  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    return localStorage.getItem("theme");
  });
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(state.todos)),
    [state.todos]
  );

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: id,
    });
  };

  const selectTodo = (id) => {
    dispatch({
      type: "SELECT_TODO",
      payload: id,
    });
  };

  const deselectTodo = () => {
    dispatch({
      type: "DESELECT_TODO",
      payload: null,
    });
  };

  const editTodo = (todo) => {
    dispatch({
      type: "EDIT_TODO",
      payload: todo,
    });
  };

  const completeTodos = (todos) => {
    dispatch({
      type: "DELETE_COMPLETED_TODOS",
      payload: todos,
    });
  };

  return (
    <TodosContext.Provider
      value={{
        ...state,
        addTodo,
        deleteTodo,
        completeTodo,
        selectTodo,
        deselectTodo,
        editTodo,
        completeTodos,
        theme,
        setTheme,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
