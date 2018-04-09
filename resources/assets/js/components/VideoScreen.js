import React from 'react';

function VideoScreen(props) {
	if(!props.video){
		return "loading...";
	}


	const videoId = props.video.id.videoId;
	const url = "https://youtube.com/embed/" + videoId;
	console.log("hi " + videoId);

	return (
		<div className="col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
  				<iframe className="embed-responsive-item" src = {url}></iframe>
			</div>

			<div className = "details">
				<div>{props.video.snippet.title}</div>
				<div>{props.video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoScreen;