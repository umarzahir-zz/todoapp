import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

class showTodo extends Component {
    render() {
        const todoName = this.props.todos
        return (
            <div className="container d-flex justify-content-center">
                {todoName.map((todo) => {
                    return(
                    <MDBBtn  key={todo.name} > {todo.name}</MDBBtn> )
                })}
                
            </div>
        )
    }
}

export default showTodo
