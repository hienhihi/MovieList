import React from 'react';
import ToggleWatchButton from './ToggleWatchButton.jsx';

const MovieListItem = (props) => {
    return (
        <div>
            <span>
            {props.movie.title}
            </span>
            <span><ToggleWatchButton 
            movie={props.movie} 
            watched={props.watched}
            toWatch={props.toWatch}/>
            </span>
        </div>
    )
}

export default MovieListItem;