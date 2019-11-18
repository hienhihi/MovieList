import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = (props) => {
    return (
        <div>
            {props.movies.map((movie) => 
                <MovieListItem movie={movie} />
            )}
        </div>
    )
}

export default MovieList;