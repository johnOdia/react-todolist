import React from 'react'

export class Todo extends React.Component{
    render(){
        return(
            <li>{this.props.todo}</li>
        )
    }
}