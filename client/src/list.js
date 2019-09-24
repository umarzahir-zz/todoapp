import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import {MDBBadge, MDBBtn} from 'mdbreact'
import "react-datepicker/dist/react-datepicker.css";
import SpinnerPage from './spineer';
export class list extends Component {
    state= {newList: "",startDate: new Date(),isUpdate: false, listArray: [], isRadio: false}
    handlechange = (event) => {
        this.setState({newList: event.target.value})
    }
    handleDateChange = (date) => {
        this.setState({
            startDate: date
          });
    }
    componentDidMount = () => {
        console.log(this.props.updateList)
        axios.get("http://localhost:5000/api/alltodos")
        .then(data => {
            console.log(data.data[0].list)
            this.setState({
            listArray: data.data[0].list,
        }) }
        ).catch(err => console.log("update comp err", err)) 
    }
    componentDidUpdate = () => {
        console.log("in update",this.props.updateList)
        if(this.state.isUpdate || this.props.updateList) {
            axios.get("http://localhost:5000/api/alltodos")
            .then(data => {
                console.log(data.data[0].list)
                this.setState({
                listArray: data.data[0].list,
                isUpdate: false
            }) }
            ).catch(err => console.log("update comp err", err)) }
        
        }
         handleEdit = () => {

         }
    
    handleDel = (id,title) => {
        axios.delete("http://localhost:5000/api/deletelist", {data: {id : id, title: title}})
        .then(()=> {
            this.setState({isUpdate: true})})
                        }
    
    handleClick = () => {
        axios.put("http://localhost:5000/api/newlist", {id: this.props.id , title: this.state.newList, isMarked: false, dD: this.state.startDate})
        .then( () => {
            this.setState({isPost: true})
            
            axios.get("http://localhost:5000/api/alltodos")
            .then(data => {
                console.log(data.data[0].list)
                this.setState({
                listArray: data.data[0].list,
                isPost: false
            }) }
            ).catch(err => console.log("update comp err", err)) }
        
        ).catch(err => console.log("error: ", err))
    };
    render() {
        return (
            <div className="container">
                {this.state.isUpdate ?  <div id="cover-spin"></div> : null}
                <h2>{this.props.sel}</h2> 
                <input placeholder="new todo" value={this.state.newList} onChange={this.handlechange}></input>
                <DatePicker
        selected={this.state.startDate}
        onChange={this.handleDateChange}/>
                <button onClick={this.handleClick} >Create</button>
            
                {this.state.listArray.length ? this.state.listArray.map((list) => {
                      return(
                          <div key={list._id}>
                        <input type="radio" onClick={()=>this.setState({isRadio: !this.state.isRadio})
                        } name="gender" />
                        <MDBBtn color="primary">
       { list.title  } <MDBBadge color="danger" className="ml-2">{list.dueDate}</MDBBadge>
        
      </MDBBtn>
      <MDBBtn onClick={()=>this.handleDel(list._id,list.title)}>X</MDBBtn>
      
                        </div>
                        
                  )
                 
                  
                }): <p>NO TODO</p>}
                 <p>{this.state.isPost ? <SpinnerPage/>   : null} </p>
          
            

            </div>
        )
    }
}


export default list
