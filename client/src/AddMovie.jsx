import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
        this.changeMovie = this.changeMovie.bind(this);
        this.submitMovie = this.submitMovie.bind(this);
    }
    changeMovie(event) {
        this.setState({
            item: event.target.value
        })
    }
    submitMovie(event) {
        event.preventDefault();
        this.props.addFunc(this.state.item);
    }
    render () {
        return (
            <div>
                <form onSubmit={this.submitMovie}>
                    <label>
                    <input value={this.state.item} onChange={this.changeMovie}/>
                    </label>
                    <button>Add Movie</button>
                </form>
            </div>
        )
    }
}

export default AddMovie;