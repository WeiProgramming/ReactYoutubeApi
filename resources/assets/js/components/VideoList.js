import React,{Component} from 'react';
import VideoItem from './VideoItem';

function VideoList(props){
	const parsedVideos = props.videos.map(
		(video) => {return <li className ="list-group-item"><VideoItem video = {video}/></li>}
	);

	return (
		<div> 
			<ul className = "list-group">
				{parsedVideos}
			</ul>
		</div>
	);
}


export default VideoList;