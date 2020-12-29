import React from 'react'
import {Link, Redirect,useParams} from 'react-router-dom'

import {moviesData} from './MovieData'
function MovieDescription() {
    const {filmId}=useParams()
   
    return (

        <div class="product-card">
        
       
      <div class="product-details">
        <h1>{moviesData.find(film=>film.id===Number(filmId)).name}</h1>
        <p>{moviesData.find(film=>film.id===Number(filmId)).synopsis}</p>
        <Link to='/'><button type="button" class="btn">Home</button></Link>
        <a href={moviesData.find(film=>film.id===Number(filmId)).trailer}>Go trailler</a>
        
     
      </div>
      <img className="imgdecription" src={moviesData.find(film=>film.id===Number(filmId)).image} alt="ii"/>
    </div>
        
    )
}

export default MovieDescription
