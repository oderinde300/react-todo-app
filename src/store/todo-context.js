import React from "react";

const TodoContext = React.createContext({
    todos: [],
    addTodo: (todo) => { },
    removeTodo: (id) => { },
    removeAllTodos: () => { },
})

export default TodoContext;