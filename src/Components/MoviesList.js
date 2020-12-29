import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({moviesList , nameSearch, ratingSearch }) {
    return (
        <div>
             {moviesList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
        </div>
    );
}

export default MoviesList
