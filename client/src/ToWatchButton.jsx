import React from 'react';

class ToWatchButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toWatch: []
        }
        this.ToWatchList = this.ToWatchList.bind(this);
    }
    ToWatchList(event) {
        event.preventDefault();
        this.props.towatchrender(toWatch);
        //will be sending the array with all item with the same tags. 
    }
    render() {
        return (
            <div>
                <form>
                <button> To Watch </button>
                </form>
            </div>
        );
    }
}

export default ToWatchButton;