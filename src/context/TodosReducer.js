const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        todos: filteredTodos,
      };

    case "COMPLETE_TODO":
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: newTodos,
      };

    case "SELECT_TODO":
      const selectedTodo = state.todos.filter((todo) => {
        return todo.id === action.payload;
      });

      return {
        ...state,
        selectedTodo: selectedTodo[0],
      };

    case "DESELECT_TODO":
      return {
        ...state,
        selectedTodo: action.payload,
      };

    case "EDIT_TODO":
      const editedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todoTitle: action.payload.todoTitle }
          : todo
      );

      console.log(editedTodos);
      return {
        ...state,
        todos: editedTodos,
      };

    case "DELETE_COMPLETED_TODOS":
      const incompletedTodos = action.payload.filter(
        (todo) => todo.completed === false
      );

      console.log(incompletedTodos);

      return {
        ...state,
        todos: incompletedTodos,
      };

    default:
      return {
        ...state,
      };
  }
};

export default todosReducer;
