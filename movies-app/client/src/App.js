import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    movies: []
  }
  

  async componentDidMount(){
    let response = await axios.get("http://localhost:3000/movies");
    let movies = response.data;
    console.log(movies)
    this.setState({movies})
  }

  render(){

    const url = 'https://image.tmdb.org/t/p/w780/'

    let movies  = this.state.movies.map((film, index)=>(
      <div key={index}>
        <h2>{film.title}</h2>
        <p>{film.overview}</p>
        <img src={ url + film.poster_path} alt="poster"/>
        <img src={url + film.backdrop_path} alt="backdrop"/>
      </div>
    ))

    return(
      <div>{movies}</div>
    )
  }

}

export default App;
