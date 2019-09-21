import React, { Component } from 'react'
import {MDBBtn, MDBInput,MDBCol,MDBRow} from 'mdbreact'
import ShowTodo from './showTodo';

class todo extends Component {
    state = {mytodos: [], currentTodo: null}
    handleChange = (event) =>{
        console.log(event.target.value)
        this.setState({ currentTodo: event.target.value})
    }
    handleClick = () => {
        console.log(this.state.currentTodo)
        const todoobj = {name: this.state.currentTodo}
        this.setState({mytodos: [...this.state.mytodos, todoobj ]})
    }
    render() {
        const {mytodos} = this.state
        return (
            <div className="container">
                <MDBRow>
               <MDBCol size="8"> <MDBInput onChange={this.handleChange} ></MDBInput></MDBCol>
               <MDBCol><MDBBtn onClick={this.handleClick} color="info" size="lg">todo</MDBBtn> </MDBCol> 
                </MDBRow>
                <ShowTodo todos={mytodos}/>
            </div>
        )
    }
}

export default todo
