import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';
import axios from 'axios'
import Popovertodo from './popovertodo'

class showTodo extends Component {

    handleclick = () => {
        console.log("delete")
    }
    handleDelete = (todo) => {
        console.log(todo)
        this.props.handleDeletepr(todo)
        
    }
    handleUpdate = (id,utodo) => {
        console.log(id,utodo)
        this.props.handled(id,utodo)
    }
    handleEdit = (id) => {
        this.props.handleEditpr(id)
    }
    render() {
        const todoName = this.props.todos
        return (
            <div className="container ">
                {todoName.data ? todoName.data.map((todo) => {
                    return(
                        <div className="btn-group " key={todo._id}  role="group" aria-label="Basic example">
                            
  <button type="button" onClick={()=>this.handleDelete(todo._id)} className="btn btn-secondary">X</button>
  <button type="button" className="btn btn-secondary">{todo.todo}</button>
  {/* <button type="button" className="btn btn-secondary" onClick={()=>this.handleEdit(todo._id)} >E</button> */}
  <Popovertodo name={todo.todo} id={todo._id} hd={this.handleUpdate}/>
</div>
                     )
                }): <p>Loading Data .....</p>}
                
            </div>
        )
    }
}

export default showTodo
