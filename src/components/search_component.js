import React from 'react';

class Search extends React.Component{


handlerOnClick(){
    console.log('i am clicked.');
}

    render() {
       return (
        <div>
            <input />
            <button onClick={this.handlerOnClick}/>
        </div>
    ); 
    }
}

export default Search;