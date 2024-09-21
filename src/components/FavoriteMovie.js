import React, { Component } from 'react';
import Poster from './Poster';
import MovieInfo from './MovieInfo';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        releaseYear: '2014',
        studio: 'Paramount Pictures',
        poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg'
      }
    };
  }

  render() {
    const { movie } = this.state;

    return (
      <div className="container" style={{ padding: '20px' }}>
        <h1>Мой любимый фильм</h1>
        <Poster poster={movie.poster} />
        <div className="movie-info">
          <MovieInfo 
            title={movie.title} 
            director={movie.director} 
            releaseYear={movie.releaseYear} 
            studio={movie.studio} 
          />
        </div>
      </div>
    );
  }
}

export default FavoriteMovie;