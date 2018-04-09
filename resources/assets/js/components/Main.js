import React, { Component } from 'react';
import YoutubeSearchAPI from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoScreen from './VideoScreen';

const API_KEY = 'AIzaSyAr7p9kwzs5phVm348wYg0ajGtDLeyFtlI';

//this is the main component

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.handleChange = this.handleChange.bind(this); //you need to bin
        this.handleSelected = this.handleSelected.bind(this);

        YoutubeSearchAPI({
        key: API_KEY,
        term: 'cats'
        }, (videos) => {
            this.setState({videos:videos,selectedVideo:videos[0]});
            console.log(videos);
        });
    }
    handleChange(term) {
        YoutubeSearchAPI({
        key: API_KEY,
        term: term
        }, (videos) => {
            this.setState({videos:videos, selectedVideo:videos[0]});
            console.log(videos);
        });
    }

    handleSelected(video){
        this.setState({selectedVideo:video});
    }

    render() {
        return (
            <div>
                <SearchBar onInputChange={this.handleChange}/>
                <div className = "row">
                    <VideoScreen video = {this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} handleSelected={this.handleSelected}/>
                </div>
            </div>
        );
    }

};
