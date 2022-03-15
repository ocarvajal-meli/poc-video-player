declare global {
    interface Window {
        player: any;
        google: any;
    }
}

interface IVideoPlayerVODProp {
    backupStream: string;
    contentSourceId: string;
    videoId: string;
}

export enum StreamType {
    VOD = 'vod',
    LIVE = 'live'
}

export interface IVideoPlayer {
    autoplay?: boolean;
    playbackRates?: number[];
    width?: number;
    height?: number;
    controls?: boolean;
    streamType: StreamType;
    vod: IVideoPlayerVODProp;
}