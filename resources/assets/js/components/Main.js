import React, { Component } from 'react';
import YoutubeSearchAPI from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyAr7p9kwzs5phVm348wYg0ajGtDLeyFtlI';

//this is the main component

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []}
        this.change = this.change.bind(this); //you need to bin

        YoutubeSearchAPI({
        key: API_KEY,
        term: 'cats'
        }, (videos) => {
            this.setState({videos});
            console.log(videos);
        });
    }
    handleChange(term) {
        YoutubeSearchAPI({
        key: API_KEY,
        term: term
        }, (videos) => {
            this.setState({videos});
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar onInputChange={this.handleChange}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }

};
