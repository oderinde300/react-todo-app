import React from 'react'
import classes from './Header.module.css'
import Card from '../Card/Card'

export default function Header() {
    return (
        <Card>
            <p className={classes.header}>
                React Todo App
            </p>
        </Card>
    )
}
