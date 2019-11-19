import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class ToggleWatchButton extends React.Component{
    constructor(props) {
        super(props)
       this.state = {
           watching: this.props.movie.watch
       }
        this.toggleButton = this.toggleButton.bind(this);
    }
    toggleButton(event) {
        event.preventDefault();
        var current = this.state.watching;
        this.setState({
            watching: !current
        });
        if (current === false) {
            this.props.watched(this.props.movie);
        } else {
            this.props.toWatch(this.props.movie);
        }
    }
    render() {
        return (
            <div>
                <form>
                    <button onClick={this.toggleButton}>{this.state.watching === true ? 'To Watch' : 'Watched'}</button>                
                </form>
            </div>
        )
    }
}

export default ToggleWatchButton;
//if watch = to watch, display to watch, if not, display watched