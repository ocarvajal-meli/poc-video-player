import shaka from 'shaka-player/dist/shaka-player.ui';
import React, { useEffect } from 'react';
import {
  ForwardFiveButton,
  ForwardTenButton,
  ForwardThirtyButton,
  RewindFiveButton,
  RewindTenButton,
  RewindThirtyButton,
  VerticalVolume
} from "shaka-player-ui-controls";

import "shaka-player-ui-controls/dist/main.css";
/**
 * A React component for shaka-player.
 * @param {string} src
 * @param {shaka.extern.PlayerConfiguration} config
 * @param {boolean} autoPlay
 * @param {number} width
 * @param {number} height
 * @param ref
 * @returns {*}
 * @constructor
 */
function ShakaPlayerT({ src, config, chromeless, className, ...rest }, ref) {
  const uiContainerRef = React.useRef(null);
  const videoRef = React.useRef(null);

  const [player, setPlayer] = React.useState(null);
  const [ui, setUi] = React.useState(null);

  // Effect to handle component mount & mount.
  // Not related to the src prop, this hook creates a shaka.Player instance.
  // This should always be the first effect to run.
  React.useEffect(() => {
    const player = new shaka.Player(videoRef.current);
    setPlayer(player);

    player && shaka.polyfill.installAll()

    //register controls
    shaka.ui.Controls.registerElement(
      "vertical_volume",
      new VerticalVolume.Factory()
    );
    shaka.ui.Controls.registerElement("rewind_10", new RewindTenButton.Factory());
    shaka.ui.Controls.registerElement("forward_10", new ForwardTenButton.Factory());

    let ui;
    if (!chromeless) {
      const ui = new shaka.ui.Overlay(
        player,
        uiContainerRef.current,
        videoRef.current
      );
      setUi(ui);
    }

    return () => {
      player.destroy();
      if (ui) {
        ui.destroy();
      }
    };
  }, []);

  React.useEffect(() => {

    if (ui && config) {
      ui.configure(config)
    }

  }, [ui, config])

  // Keep shaka.Player.configure in sync.
  React.useEffect(() => {
    if (player && config) {

      player.configure(config);
    }
  }, [player, config]);

  // Load the source url when we have one.
  React.useEffect(() => {
    if (player && src) {
      player.load(src).then(function () {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      });
    }
  }, [player, src]);

  // Define a handle for easily referencing Shaka's player & ui API's.
  React.useImperativeHandle(
    ref,
    () => ({
      get player() {
        return player;
      },
      get ui() {
        return ui;
      },
      get videoElement() {
        return videoRef.current;
      }
    }),
    [player, ui]
  );

  useEffect(() => {
    console.log(videoRef)

  }, [player])

  return (
    <div ref={uiContainerRef} className={className}>
      <video
        ref={videoRef}
        style={{
          maxWidth: '100%',
          width: '100%'
        }}
        {...rest}
      />
    </div>
  );
}

export default React.forwardRef(ShakaPlayerT);