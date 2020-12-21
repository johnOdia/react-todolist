import React from 'react'
import {Todo} from './todo'

const todos = ['learn html/css','learn javaScript/JQuery','learn React/Redux','Learn Node/Express','learn a database','become a fullstack developer']

export class Todolist extends React.Component{
    render(){
        const allTodos = todos.map(todo => <Todo todo={todo} />)

        return <ul>{allTodos}</ul>
    }
}