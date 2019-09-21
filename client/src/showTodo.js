import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

class showTodo extends Component {

    handleclick = () => {
        console.log("delete")
    }
    render() {
        console.log("data",this.props.todos)
        const todoName = this.props.todos
        console.log(todoName.data)
        return (
            <div className="container ">
                {todoName.data ? todoName.data.map((todo) => {
                    return(
                        <div className="btn-group " key={todo.todo}  role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary">X</button>
  <button type="button" className="btn btn-secondary">{todo.todo}</button>
  <button type="button" className="btn btn-secondary">E</button>
</div>
                     )
                }): <p>Loading Data .....</p>}
                
            </div>
        )
    }
}

export default showTodo
