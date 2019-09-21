import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

class showTodo extends Component {

    handleclick = () => {
        console.log("delete")
    }
    render() {
        const todoName = this.props.todos
        return (
            <div className="container ">
                {todoName.map((todo) => {
                    return(
                        <div className="btn-group " key={todo.name}  role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">X</button>
  <button type="button" class="btn btn-secondary">{todo.name}</button>
  <button type="button" class="btn btn-secondary">E</button>
</div>
                     )
                })}
                
            </div>
        )
    }
}

export default showTodo
