
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_listing';
import VideoView from './components/video_view';

const API_KEY = 'AIzaSyD5xvfApufMY8RookM595n4WCfGuDUaxH8';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            videos: [], 
            selectedVideo: null
        };

       this.videoSearch('surfboards');
    }

videoSearch(term) {
 YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
}
  
    render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoView video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} 
            />
            
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.root'));
