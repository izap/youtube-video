import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyD5xvfApufMY8RookM595n4WCfGuDUaxH8'

class App extends React.Component{

render(){
    return (
        <div>
        <SearchBar />
        </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.root'));