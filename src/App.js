import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
//import { listItems } from './components/ListDemo';
import './App.css';
//import {MoviesList} from './components/ListDemo';
import DynamicMoviesList from './dynamicListsDemo/DynamicMoviesList';
import TextareaAndSelectTagDemo from './dynamicListsDemo/TextareaAndSelectTagDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        {/*  <ul className="list-style">{ listItems }</ul>
         <div>
          <MoviesList />
        </div> */}
        <hr />
        <DynamicMoviesList />
        <TextareaAndSelectTagDemo />
      </div>
    );
  }
}

export default App;
