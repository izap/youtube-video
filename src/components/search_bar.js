import React from 'react';

class SearchBar extends React.Component{

constructor(){
    super();
    this.state = {
        defaultValue: 'Default Text'
    };
    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerOnFocus = this.handlerOnFocus.bind(this);
}

handlerOnClick(myvalue){
    this.setState({defaultValue: 'i love this'});
    console.log(myvalue?myvalue:'I\' Searching');
}

handlerOnChange(event){
    this.setState({defaultValue: event.target.value});
    this.handlerOnClick('new value');
}

handlerOnFocus(){
    this.setState({defaultValue: ''});
}

    render() {
       return (
        <div>
            <input name="Search" value={this.state.defaultValue}
            onChange={this.handlerOnChange.bind(event)}
            onFocus={this.handlerOnFocus}
            placeholder="Type your text to be searched"/>
            <button onClick={this.handlerOnClick}>
            Youtube Search
            </button>
        </div>
    ); 
    }
}

export default SearchBar;