import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedButton from './WatchedButton.jsx';
import ToWatchButton from './ToWatchButton.jsx';
// import React
const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movies: movies,
            watched: [],
            toWatch: []
        }
        this.searchFunction = this.searchFunction.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.toWatchList = this.toWatchList.bind(this);
    }
    addMovie(movieInput) {
        let newMovie = this.state.movies;
        console.log(newMovie);
        newMovie.push({title: movieInput})
        this.setState({
            movies: newMovie
        })
    }
    searchFunction(searchedTerm) {
        console.log('hello from app')
        let filtered = movies;
        let searchResults = filtered.filter(term => {
            let title = term.title.toLowerCase();
            return title.includes(searchedTerm);
        }
       );
       console.log(searchResults);
        this.setState({
            movies: searchResults
        })
    }
    toWatchList(towatchList) {
        console.log('towatch');
        this.setState({
            movies: towatchList
        })
    }
    render() {
        return(
            <div>
                <h2>Watch movie</h2>
                <ToWatchButton towatchrender={this.toWatchList}/>
                <WatchedButton />
                <AddMovie addFunc={this.addMovie}/>
                <SearchBar searchFunc={this.searchFunction}/>
                {this.state.movies.length > 0 ? <MovieList movies={this.state.movies} /> : 'No Movie found'}       
            </div>
        )
    }
}

export default App;