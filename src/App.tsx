import React from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { StreamType } from './components/VideoPlayer/VideoPlayer.interface';

function App() {

  const videoPlayerOptions = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: false,
    streamType: StreamType.VOD,
    vod: {
      contentSourceId: '2528370',
      videoId: 'tears-of-steel',
      backupStream: 'https://storage.googleapis.com/interactive-media-ads/media/bbb.m3u8'
    }
  };
  
  return (
    <>
      <h1>Google DAI with VideoJS</h1>
      <VideoPlayer {...videoPlayerOptions} />
    </>
  );
}

export default App;
