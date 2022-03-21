import React from 'react';
import './App.css';
import VideoPlayer2 from './VideoPlayer2';

function App() {

  const videoPlayerOptions = {
    autoplay: true,
    width: 300,
    height: 300,
    controls: false,
    sources: [
      {
        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        type: 'application/x-mpegURL'
      },
    ],
  };

  return <VideoPlayer2 {...videoPlayerOptions} />;
}

export default App;
