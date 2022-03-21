import React from 'react';
import ShakaPlayerT from './components/ShakaComponents'
import 'shaka-player/dist/controls.css';

const STREAMS = [
    {
        name: 'Angel One MPEG-DASH',
        src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd#t=10'
    },
    {
        name: 'Big Buck Bunny HLS',
        src:
            'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'
    }
];

export default function VideoPlayer2() {
    const [show, setShow] = React.useState(true);
    const [chromeless, setChromeless] = React.useState(false);
    const ref = React.useRef(null);

    const config = {
        'controlPanelElements': ['vertical_volume', 'rewind_10', 'play_pause', 'forward_10', 'rewind', 'fast_forward', 'time_and_duration', 'volume'],
        'seekBarColors': {
            base: 'rgba(255, 0, 0, 0.3)',
            buffered: 'rgba(255, 165, 0, 0.54)',
            played: 'rgb(238, 130, 238)',
            adBreaks: 'rgb(255, 204, 0)',
        },
        'addBigPlayButton': true,
    }

    React.useEffect(() => {
        window.getShakaInst = () => ref.current;
    }, []);

    function onToggle() {
        setShow(!show);
    }

    function onChromeless() {
        setChromeless(!chromeless);
    }

    const [src, setSrc] = React.useState(STREAMS[0].src);

    function onSelectSrc(event) {
        setSrc(event.target.value);
    }


    return (
        <div>
            <div>
                <button onClick={onToggle}>{show ? 'Hide' : 'Show'}</button>
            </div>
            <div>
                <input type="checkbox" onChange={onChromeless} /> Chromeless
            </div>
            <div>
                <select value={src} onChange={onSelectSrc}>
                    {STREAMS.map(stream => (
                        <option value={stream.src}>{stream.name}</option>
                    ))}
                </select>
            </div>
            {show && (
                <ShakaPlayerT config={config} ref={ref} src={src} chromeless={chromeless} height={500} width={500} />
            )}
        </div>
    );
}