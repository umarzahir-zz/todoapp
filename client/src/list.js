import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import {MDBBadge, MDBBtn} from 'mdbreact'
import "react-datepicker/dist/react-datepicker.css";
export class list extends Component {
    state= {newList: null,startDate: new Date(),isUpdate: false, listArray: [], isRadio: false}
    handlechange = (event) => {
        this.setState({newList: event.target.value})
        
    }
    handleDateChange = (date) => {
        this.setState({
            startDate: date
          });
    }
    componentDidMount = () => {
        
        axios.get("http://localhost:5000/api/alltodos")
        .then(data => {
            console.log(data.data[0].list)
            this.setState({
            listArray: data.data[0].list,
           

        }) }
        ).catch(err => console.log("update comp err", err)) 
    }
    componentDidUpdate = () => {
        if(this.state.isUpdate) {
            axios.get("http://localhost:5000/api/alltodos")
            .then(data => {
                console.log(data.data[0].list)
                this.setState({
                listArray: data.data[0].list,
                isUpdate: false
            }) }
            ).catch(err => console.log("update comp err", err)) }
        
        }
    }
    handleDel = (id) => {
        console.log(id)
        axios.delete("http://localhost:5000/api/newlist", {data: {id: id}})
        .then(()=> {
            this.setState({isUpdate: true})})
                        }
    
    handleClick = () => {
        axios.put("http://localhost:5000/api/newlist", {id: this.props.id , title: this.state.newList, isMarked: false, dD: this.state.startDate})
        .then( () => {
            axios.get("http://localhost:5000/api/alltodos")
            .then(data => {
                console.log(data.data[0].list)
                this.setState({
                listArray: data.data[0].list,
            }) }
            ).catch(err => console.log("update comp err", err)) }
        
        ).catch(err => console.log("error: ", err))
    }
    render() {
        return (
            <div className="container">
                <h2>{this.props.sel}</h2>
                <input placeholder="new todo" value={this.state.bewList} onChange={this.handlechange}></input>
                <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDateChange}/>
                <button onClick={this.handleClick} >Create</button>
            
                {this.state.listArray.length ? this.state.listArray.map((list) => {
                      return(
                          <div key={list.title}>
                        <input type="radio" onClick={()=>this.setState({isRadio: !this.state.isRadio})
                        } name="gender" />
                        <MDBBtn color="primary">
       { list.title  } <MDBBadge color="danger" className="ml-2">{list.dueDate}</MDBBadge>
        <span className="sr-only">unr</span>
      </MDBBtn>
      <MDBBtn onClick={()=>this.handleDel(todo._id)}>X</MDBBtn>
                        </div>
                  )
                  
                }): <p>NO TODO</p>}
          
            

            </div>
        )
    }
}

export default list
