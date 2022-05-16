import React from 'react';

const VideoItem = ({video}) => {
  return (
    <div>
      <h2>{video.title}</h2>
      <a href={video.link}><img src={video.img}/></a>
      <p>{video.decription}</p>
    </div>
  );
}


export default VideoItem;
