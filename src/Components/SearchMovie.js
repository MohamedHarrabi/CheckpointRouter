import React from 'react';

import Rate from './Rate';


const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div className="search_class">
      <div >
        <input
        className="inputbar"
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        </div>
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        
      </div>
    </div>
  );
};

export default SearchMovie;