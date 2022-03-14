import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {

  const videoPlayerOptions = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        type: 'application/x-mpegURL'
      },
    ],
  };
  
  return <VideoPlayer {...videoPlayerOptions} />;
}

export default App;
