import React from 'react';
import { runInThisContext } from 'vm';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeHandler(event) {
        this.setState({
            searchValue: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        // console.log('hello from search');
        this.props.searchFunc(this.state.searchValue);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value ={this.state.searchValue} onChange={this.changeHandler} />
                    <button>Search Movie</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;