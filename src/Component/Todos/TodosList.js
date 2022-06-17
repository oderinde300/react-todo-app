import React, { useContext, useState } from 'react'
import Card from '../Card/Card'
import TodoForm from './TodoForm/TodoForm'
import Todo from './Todo'
import TodoContext from '../../store/todo-context'
import classes from './TodosList.module.css'

export default function TodosList() {
    const [showClear, setShowClear] = useState(false);

    const todosCtx = useContext(TodoContext);

    const pendingTodos = todosCtx.todos.length;

    const addToTodoHandler = (todo) => {
        todosCtx.addTodo({
            todo: todo,
            id: Math.random().toString()
        })
        setShowClear(true);
    }

    const todosList = todosCtx.todos.map(todo => {
        return <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id} />
    })

    const removeAllTodos = () => {
        todosCtx.removeAllTodos();
        setShowClear(false);
    }

    return (
        <Card>
            <div className={classes['todos-list']}>
                <div className={classes['todo-form']}>
                    <TodoForm onAddTodos={addToTodoHandler} />
                </div>
                <div className={classes['todo-item']}>
                    {todosList}
                </div>
                <div className={classes['pending']}>
                    <p>You have <span>{pendingTodos}</span> pending tasks</p>
                    {showClear && <button onClick={removeAllTodos}>Clear All</button>}
                </div>
            </div>
        </Card>
    )
}
