import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = (props) => {
    return (
        <div>
            {props.movies.map((movie) => 
                <MovieListItem movie={movie}
                watched={props.watched}
                toWatch={props.toWatch}/>
            )}
        </div>
    )
}

export default MovieList;