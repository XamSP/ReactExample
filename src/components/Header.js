import React, { Component } from 'react';
import Title from './Title';
import Description from './Description';
import logo from '../logo.svg';

class header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data1 : {
                title: "Welcome to React, Ironhacker!",
                description: "You are ready to take this to the next level!",
            }
        }
    }

    render() {
        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title pack={this.state.data1.title}></Title>
            <Description pack={this.state.data1.description}></Description>
        </header>
        );
    }
}

export default header;