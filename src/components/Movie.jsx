import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className='movie'>
      <div className='movie-inner'>
        <div className='movie-front'>
          <img className='movie-poster' src={IMG_API + poster_path} alt={title} />
          <div className='movie-title'>{title}</div>
          <span className='movie-vote'>{vote_average}</span>
        </div>
        <div className='movie-back'>
          <p className='movie-overview'>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
