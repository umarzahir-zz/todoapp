
import { MDBPopover, MDBInput, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";

import React, { Component } from 'react'

export class popovertodo extends Component {
  state={ todo: "yes" }  
  handlechange = (event) => {
    this.setState({ todo: event.target.value })
    

  }
  handleUpdate = (id) => {
    this.props.hd(id,this.state.todo)
  }
  componentDidMount = () => {
    this.setState({todo: this.props.name})
    
  }
  
  render() {
    return (
      
        
     
     <MDBPopover
       placement="bottom"
       popover
       clickable
       id="popper3"
     >
       <MDBBtn>edit</MDBBtn>
       <div>
         <MDBPopoverHeader>Change list Name</MDBPopoverHeader>
         <MDBPopoverBody>
         <input value={this.state.todo} onChange={this.handlechange}/>
         <button onClick={()=>this.handleUpdate(this.props.id)}>Update</button>
         </MDBPopoverBody>
       </div>
     </MDBPopover>

      
    )
  }
}

export default popovertodo
