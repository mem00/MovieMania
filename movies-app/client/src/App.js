import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import MaterialIcon from 'material-icons-react'

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    movies: []
  }
  this.handleUp = this.handleUp.bind(this);
  this.handleDown = this.handleDown.bind(this);
}

  
  

  async componentDidMount(){
    let response = await axios.get("http://localhost:3000/movies");
    let movies = response.data;

    this.setState({movies});
  }

  async handleUp(index){
    let currentMovies = this.state.movies;
 
    let movie = currentMovies[index]
      
    await axios.put(`http://localhost:3000/movies/${index+1}`, {rating : movie.rating+1})
 
    let response = await axios.get("http://localhost:3000/movies");
    let movies = response.data;

    this.setState({movies});

  }

  async handleDown(index){
    let currentMovies = this.state.movies;
 
    let movie = currentMovies[index]
      
    await axios.put(`http://localhost:3000/movies/${index+1}`, {rating : movie.rating-1})
 
    let response = await axios.get("http://localhost:3000/movies");
    let movies = response.data;

    this.setState({movies});

  }

  render(){

    const url = 'https://image.tmdb.org/t/p/w780/'


    let movies  = this.state.movies.map((film, index)=>(

      <div key={index}>
        <h2>{film.title}</h2>
        <h3><MaterialIcon onClick= {() => this.handleDown(index)}  icon="arrow_downward"/>{film.rating}<MaterialIcon onClick= {() => this.handleUp(index)}  icon="arrow_upward"/></h3>
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
