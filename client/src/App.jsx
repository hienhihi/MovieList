import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

// import React
const movies = [
    {title: 'Mean Girls', watch: true},
    {title: 'Hackers', watch: true},
    {title: 'The Grey', watch: true},
    {title: 'Sunshine', watch: true},
    {title: 'Ex Machina', watch: true}
  ];
  
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movies: movies,
            watched: [],
            toWatch: movies
        }
        this.searchFunction = this.searchFunction.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.toWatchList = this.toWatchList.bind(this);
        this.watchedList = this.watchedList.bind(this);
        this.handleWatched = this.handleWatched.bind(this);
        this.handleToWatch = this.handleToWatch.bind(this);
    }
    addMovie(movieInput) {
        let newMovie = this.state.movies;
        console.log(newMovie);
        newMovie.push({title: movieInput, watch: true})
        this.setState({
            movies: newMovie
        })
    }
    searchFunction(searchedTerm) {
        let filtered = movies;
        let searchResults = filtered.filter(term => {
            let title = term.title.toLowerCase();
            return title.includes(searchedTerm);
        }
       );
        this.setState({
            movies: searchResults
        })
    }

    watchedList(watchedItem) {
        let watchedArray = this.state.watched;
        watchedItem.watch = !watchedItem.watch;
        if (!watchedArray.includes(watchedItem)) {
            watchedArray.push(watchedItem);
        }
        let toWatchArr = this.state.toWatch;
        for (var i = 0; i < toWatchArr.length; i++) {
            if (toWatchArr[i] === watchedItem) {
                toWatchArr.splice(i, 1);
            }
        }
        this.setState({
            watched: watchedArray,
            toWatch: toWatchArr
        })
    }

    toWatchList(toWatchItem) {
        let toWatchArr = this.state.toWatch;
        toWatchItem.watch = !toWatchItem.watch;
        if (!toWatchArr.includes(toWatchItem)) {
            toWatchArr.push((toWatchItem))
        }
        let watchedArray = this.state.watched;
        for (var i = 0; i < watchedArray.length; i++) {
            if (watchedArray[i] === toWatchItem) {
                watchedArray.splice(i, 1);
            }
        }
        this.setState({
            watched: watchedArray,
            toWatch: toWatchArr
        })
    }

    handleToWatch(event) {
        event.preventDefault();
        let watchState = this.state.toWatch;
        this.setState({
            movies: watchState
        })
    }
    
    handleWatched(event) {
        event.preventDefault();
        let newState = this.state.watched;
        this.setState({
            movies: newState
        })
    }

    render() {

        return(
            <div>
                <h2>Watch movie</h2>
                <button onClick={this.handleToWatch}>To Watch</button>
                <button onClick={this.handleWatched}>Watched</button>
                <AddMovie addFunc={this.addMovie}/>
                <SearchBar searchFunc={this.searchFunction}/>
                {this.state.movies.length > 0 ? <MovieList movies={this.state.movies} watched={this.watchedList} toWatch={this.toWatchList} /> : 'No Movie found'}       
            </div>
        )
    }
}

export default App;