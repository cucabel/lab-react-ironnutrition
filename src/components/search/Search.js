import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class Search extends Component {
    state = {
        name: ''
    }   
    
    handleInput = (event) => {
        let { value } = event.target;
        this.props.filterFood(value);
        this.setState({
            name: value
    });
      } 

    render() {
        return (
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Text input" name="name" value={this.state.name} onChange={ this.handleInput } />
            </div>
        </div>
        )
    }
}

export default Search;

/* the event gets what I am writing, have to check if it is the same as the name of the list, the data*/