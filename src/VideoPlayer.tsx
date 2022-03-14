import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/src/css/vjs.scss';

declare global {
    interface Window {
        player: any;
    }
}

const VideoPlayer = (props: any) => {

    const videoElementRef = useRef('');

    const onPlayerReady = () => {
        console.log('Player ready', window.player);
    }

    useEffect(() => {
        window.player = videojs(videoElementRef.current, props, onPlayerReady);
    }, [props]);

    return (
        <video
            className="video-js"
            ref={videoElementRef}
            {...props}
        />
    )
}

export default VideoPlayer;