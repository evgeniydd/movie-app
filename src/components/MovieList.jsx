import React from 'react';
import Movie from './Movie';
import { useEffect, useState } from 'react';

const MovieList = ({ featured_api, movies, setMovies }) => {
  useEffect(() => {
    fetch(featured_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className='movie-list'>
      {movies.length ? (
        movies.map((movie) => (
          <Movie
            overview={movie.overview}
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
};

export default MovieList;
