import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyD5xvfApufMY8RookM595n4WCfGuDUaxH8'

//Functional based component
// Functional based component can contain a class based component.
const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));