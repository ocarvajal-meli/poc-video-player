/* eslint-disable no-restricted-globals */
import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


export default function VideoPlayer() {
  const controllerRef = useRef(null);

  useEffect(() => {
    const {
      /** @type {shaka.Player} */ player,
      /** @type {shaka.ui.Overlay} */ ui,
      /** @type {HTMLVideoElement} */ videoElement
    } = controllerRef.current;

    console.log("player ->", player)
    console.log("videoElement ->", videoElement)

    async function loadAsset() {
      const config = {
        'controlPanelElements': ['play_pause', 'rewind', 'fast_forward', 'time_and_duration', 'volume'],
        'seekBarColors': {
          base: 'rgba(255, 0, 0, 0.3)',
          buffered: 'rgba(255, 165, 0, 0.54)',
          played: 'rgb(238, 130, 238)',
          adBreaks: 'rgb(255, 204, 0)',
        },
      }

      ui && ui.configure(config);
      player && await player.load('https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd').catch(error =>{console.log(error)});
      // Trigger play.
      videoElement.play();
    }
    loadAsset();

  }, [controllerRef]);

  return <ShakaPlayer ref={controllerRef} />;
}