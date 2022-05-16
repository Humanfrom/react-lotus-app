import React from 'react';
import {data} from '../data.js'
import VideoItem from "../components/VideoItem/VideoItem.jsx"

const Videos = () => {
  return (
    <div>
      {data.map(item => <VideoItem key={item.id} video={item}/>)}
    </div>
  );
}


export default Videos;
