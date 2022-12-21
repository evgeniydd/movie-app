import React from 'react';

const SearchMovie = (props) => {
  return (
    <div className='search_movie'>
      <div className='logo'>
        <span>MOVIE</span>Search
      </div>
      <form onSubmit={props.handlerOnSubmit}>
        <input value={props.searchTerm} onChange={props.setsearchTerm} type='text' placeholder='Type for search...' />
      </form>
    </div>
  );
};

export default SearchMovie;
