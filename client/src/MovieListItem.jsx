import React from 'react';
import ToggleWatchButton from './ToggleWatchButton.jsx';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true
        }
        this.toggleInfo = this.toggleInfo.bind(this);
    }
    toggleInfo(event) {
        event.preventDefault();
        console.log('Is toggling');
        let currentState = this.state.isHidden;
        this.setState({
            isHidden: !currentState
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.toggleInfo}>
                {this.props.movie.title} 
                </span>
                {!this.state.isHidden && <MovieDetail movie={this.props.movie} />}               
                <span><ToggleWatchButton 
                movie={this.props.movie} 
                watched={this.props.watched}
                toWatch={this.props.toWatch}/>
                </span>
            </div>
        )
    }
}

const MovieDetail = (props) => {
    return (
        <div>
            <span>Year: {props.movie.year}</span>
            <span>Run Time: {props.movie.runtime}</span>
            <span>Meta Score: {props.movie.metascore}</span>
            <span>Imdc Rating: {props.movie.imdbRating}</span>
        </div>
    )
}

export default MovieListItem;