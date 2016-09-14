import React from 'react';

const VideoView = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;
return (
<div className="video-detail col-md-8">
  <div classname="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={url}></iframe>
  </div>
  <div className="details">
    <div><h2>{video.snippet.title}</h2></div>
    <div>{video.snippet.description}</div>
  </div>
</div>

);

};

export default VideoView