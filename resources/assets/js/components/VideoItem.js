import React from 'react';

function VideoItem({video}) {
	return (
		<div className = "media">
			<div className = "media-left">
				<img src = {video.snippet.thumbnails.default.url}/>
			</div>
			<div className = "media-body"> 
				<div className = "media-heading"> 
					{video.snippet.title}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;