import React, { Component } from 'react'
import {MDBBtn, MDBInput,MDBCol,MDBRow, MDBContainer} from 'mdbreact'
import ShowTodo from './showTodo';
import axios from 'axios'

class todo extends Component {
    state = {mytodos: [], isUpdate: false ,currentTodo: null, allTodos: [] }
    handleChange = (event) =>{
        console.log(event.target.value)
        this.setState({ currentTodo: event.target.value})
    }
    handleClick = () => {
        console.log(this.state.currentTodo)
        const todoobj = {name: this.state.currentTodo}
    //    await this.setState({mytodos: [...this.state.mytodos, todoobj ]})
        axios.post("http://localhost:5000/api/newtodo", {todo: this.state.currentTodo})
        .then(()=> this.setState({isUpdate: true})
        )
    }

     handleDelete = (todo) => {
        axios.delete("http://localhost:5000/api/deletetodo",{ data: {id: todo}})
        .then(() => this.setState({isUpdate: true})
        )
     }
    
    componentDidMount =  () => {
      console.log("mount")
        axios.get("http://localhost:5000/api/alltodos")
        .then(data => {
            console.log(data)
            this.setState({
            allTodos: data
        }) }
        )
    }

    componentDidUpdate = () => {

        if(this.state.isUpdate)
        {
            axios.get("http://localhost:5000/api/alltodos")
            .then(data => {
                console.log(data)
                this.setState({
                allTodos: data,
                isUpdate: false

            }) }
            )
        }
    }
    
    render() {
        const {mytodos} = this.state
        return (
            
                <MDBContainer>
                <MDBRow>
               <MDBCol size="8"> <MDBInput onChange={this.handleChange} ></MDBInput></MDBCol>
               <MDBCol><MDBBtn onClick={this.handleClick} color="info" size="lg">todo</MDBBtn> </MDBCol> 
                </MDBRow>
                <MDBRow>
                   <MDBCol><ShowTodo handleDeletepr={this.handleDelete} todos={this.state.allTodos}/></MDBCol> 
                    </MDBRow> 
                    </MDBContainer>
            
        )
    }
}

export default todo
