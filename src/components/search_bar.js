import React, { Component } from 'react';

// class based component
class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = { term: '' };
    }

    onInputChange (term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }

    render() {
       return( 
       <div className="search-bar">
            <input 
            value={this.state.term}
            onChange={eventObject => this.onInputChange(eventObject.target.value)} />
       </div>
       );    
    }
}

export default SearchBar;