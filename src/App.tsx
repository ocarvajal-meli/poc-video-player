import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  const videpPlayerOptions = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };
  
  return (
    <VideoPlayer {...videpPlayerOptions} />
  );
}

export default App;
