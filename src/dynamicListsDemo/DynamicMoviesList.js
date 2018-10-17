import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard'; 

class DynamicMoviesList extends Component {
  constructor(){
      super();
      this.state = {
        movies: [
          { title: "The Godfather", director: "Francis Coppola" },
          { title: "Star Wars", director: "Rian Johnson" },
          { title: "The Shawshank Redemption", director: "Frank Darabont" }
        ]
      }
  }

  deleteMovieHandler = (movieIndex) => {
    const moviesCopy = [...this.state.movies]; 
    moviesCopy.splice(movieIndex, 1);
    this.setState({
        movies: moviesCopy
    })
  }

  addHarryPotter = () => {
    const moviesCopy = [...this.state.movies]; 
    moviesCopy.push({title: "Harry Potter", director: "Rowen"});
    this.setState({
        movies: moviesCopy
    })
  }


  render() {
    console.log(this.state.movies);
    return (
      <div>
        {
          this.state.movies.map((oneMovie, index) => {
            //return <ImprovedCard key={index} {...oneMovie} />
            return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
            })
        }
        <button onClick={this.addHarryPotter}>Add Harry Potter</button>
      </div>
    );
  }
}

export default DynamicMoviesList;