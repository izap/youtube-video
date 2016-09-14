import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search_bar';

class MyApp extends React.Component{

componentWillMount(){
    console.log('i am mounting my self.');
}

render(){
    return (
        <div>
        <Search />
        </div>
    );
}
}

ReactDOM.render(<MyApp />, document.querySelector('.root'));