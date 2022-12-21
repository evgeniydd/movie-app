import './App.css';
import { useEffect, useState } from 'react';

import MovieList from './components/MovieList';
import SearchMovie from './components/SearchMovie';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm.toLowerCase())
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
    setsearchTerm('');
    console.log(movies.length);
  };

  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
    <div className='app'>
      <SearchMovie handlerOnSubmit={handlerOnSubmit} searchTerm={searchTerm} setsearchTerm={handleOnChange} />
      <MovieList featured_api={FEATURED_API} movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
