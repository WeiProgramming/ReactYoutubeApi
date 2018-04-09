import React from 'react';

function VideoItem({video,handleSelected}) {
	const url = video.snippet.thumbnails.default.url;

	return (
		<div className = "media">
			<div className = "media-left">
				<img onClick={() => handleSelected(video)} src = {url}/>
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