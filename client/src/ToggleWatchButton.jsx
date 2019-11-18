import React from 'react';

class ToggleWatchButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isToggle: false
        }
        this.toggleButton = this.toggleButton.bind(this);
    }
    toggleButton(event) {
        event.preventDefault();
        console.log('hello');
        this.setState({
            isToggle: !isToggle
        })
    }
    render() {
        return (
            <div>
                <form >
                    {this.state.isToggle === true ? <button onSubmit={this.toggleButton}>To Watch</button> : <button onSubmit={this.toggleButton}>Watched</button> }                
                </form>
            </div>
        )
    }
}

export default ToggleWatchButton;