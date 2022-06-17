import React, { useEffect, useRef, useState } from 'react'
import classes from './TodoForm.module.css'
export default function TodoForm(props) {
    const todoInputRef = useRef();
    const [isFormValid, setFormIsValid] = useState(true);



    const submitHandler = (event) => {
        event.preventDefault();

        let enteredTodo = todoInputRef.current.value;

        if (enteredTodo.trim().length === 0 || enteredTodo.length > 32) {
            setFormIsValid(false)
            return;
        }
        setFormIsValid(true);
        props.onAddTodos(enteredTodo);
        todoInputRef.current.value = '';
    }

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(true);
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [isFormValid]);


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <input
                className={!isFormValid && classes.invalid}
                type='text'
                placeholder='Add your new todo. Max-character(32)!'
                ref={todoInputRef}
            />
            <button><i className="fa-solid fa-plus"></i></button>
        </form>
    )
}
