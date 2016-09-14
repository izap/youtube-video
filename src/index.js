import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_listing'

const API_KEY = 'AIzaSyD5xvfApufMY8RookM595n4WCfGuDUaxH8'


class App extends Component {

    constructor(props){
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }
    render(){
        return(
            <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.root'));