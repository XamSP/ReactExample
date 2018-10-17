import React, { Component } from 'react';

class title extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    
    render(){
        console.log(this.props.pack)
    return (
        <h1>{this.props.pack}</h1>
    );
  }
}  
  export default title;