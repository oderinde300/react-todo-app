import { useContext, useState } from 'react'

import classes from './Todo.module.css'
import Button from '../UI/Button'
import TodoContext from '../../store/todo-context'


export default function Todo(props) {
    const [isCompleted, setISCompleted] = useState(false);
    const [isCompletedAnimation, setISCompletedAnimation] = useState(false);
    const todosCtx = useContext(TodoContext)

    const todoCompleted = () => {
        setISCompleted(!isCompleted)
        setISCompletedAnimation(true)
        setTimeout(() => {
            setISCompletedAnimation(false)
        }, 500)
    }

    const { id } = props

    const removeTodo = () => {
        todosCtx.removeTodo(id)
    }

    return (
        <div className={classes.todo}>
            <button onClick={todoCompleted} className={isCompletedAnimation && classes['bump']}>
                <i class="fa-solid fa-circle-check"></i>
            </button>
            <p className={isCompleted && classes.completed}>{props.todo}</p>
            <button onClick={removeTodo} className={classes['btn-delete']}>
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div >
    )
}
