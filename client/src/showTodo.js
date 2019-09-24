import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

import Popovertodo from './popovertodo'
import  List  from './list';

class showTodo extends Component {
state = { id: null, selected: null, isShow: false }
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
    handleShow = (id,todo) => {
        this.setState({ id: id, isShow: !this.state.isShow ,selected: todo})
        
    }
    render() {
        const todoName = this.props.todos
        return (
            <div className="container ">
               
                {todoName.data ? todoName.data.map((todo) => {
                    return(
                        <div className="btn-group " key={todo._id}  role="group" aria-label="Basic example">
                            
  <button type="button" onClick={()=>this.handleDelete(todo._id)} className="btn btn-secondary">X</button>
  <button type="button" className="btn btn-secondary" onClick={()=>this.handleShow(todo._id,todo.todo)} >{todo.todo}</button>
  {/* <button type="button" className="btn btn-secondary" onClick={()=>this.handleEdit(todo._id)} >E</button> */}
  <Popovertodo name={todo.todo} id={todo._id} hd={this.handleUpdate}/>
</div>
                     )
                }): <div id="cover-spin"></div>}
               {this.state.isShow ? <List upateList={this.props.update} id={this.state.id} sel={this.state.selected} /> : null}
            </div>
        )
    }
}

export default showTodo
