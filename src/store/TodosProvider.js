import { useReducer } from 'react';
import TodoContext from './todo-context';

const defaultTodoState = {
  todos: []
}

const todosReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTodos = state.todos.concat(action.todo);
    return {
      todos: updatedTodos
    };
  }

  if (action.type === 'REMOVE') {
    const updatedTodos = state.todos.filter(todo => todo.id !== action.id);
    return {
      todos: updatedTodos
    }
  }

  if (action.typr === 'REMOVE_ALL') {
    const updatedTodos = [];
    return {
      todos: updatedTodos
    }
  }

  return defaultTodoState;
}


const TodosProvider = (props) => {
  const [todosState, dispatchTodosAction] = useReducer(todosReducer, defaultTodoState);

  const addTodoHandler = (todo) => {
    dispatchTodosAction({ type: 'ADD', todo: todo })
  };

  const removeTodoHandler = (id) => {
    dispatchTodosAction({ type: 'REMOVE', id: id })
  };

  const removeAllITodosHandler = () => {
    dispatchTodosAction({ type: 'REMOVE-ALL' })
  };

  const todosContext = {
    todos: todosState.todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    removeAllTodos: removeAllITodosHandler
  };

  return (
    <TodoContext.Provider value={todosContext}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodosProvider;

