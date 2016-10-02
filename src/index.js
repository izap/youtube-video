
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'izap-youtube-search';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import SearchBar from './components/search_bar';
import VideoList from './components/video_listing';
import VideoView from './components/video_view';

import BookList from './containers/book-list';

const API_KEY = 'AIzaSyD5xvfApufMY8RookM595n4WCfGuDUaxH8';

const createStoreWithMiddleware = applyMiddleware()(createStore);


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            videos: [], 
            selectedVideo: null
        };

       this.videoSearch('surfboards');
    }

videoSearch(searchTerm) {
 YTSearch({ key: API_KEY, maxResults: 5, term: searchTerm }, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
}
  
    render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

        return (
            <div>
            <BookList />
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


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , 
    document.querySelector('.root'));
