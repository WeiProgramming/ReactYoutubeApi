import React,{Component} from 'react';
import VideoItem from './VideoItem';

function VideoList(props){
	const parsedVideos = props.videos.map(
		(video) => {return <li className ="list-group-item">
		<VideoItem 
		handleSelected={props.handleSelected} 
		video={video}
		key = {video.etag} /></li>
	}
	);

	return (
		<div className = "col-md-4"> 
			<ul className = "list-group">
				{parsedVideos}
			</ul>
		</div>
	);
}


export default VideoList;