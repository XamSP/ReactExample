import React, { Component } from 'react';

class description extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    
    render(){
        console.log(this.props.pack)
    return (
        <p>{this.props.pack}</p>
    );
  }
}  
  export default description;