import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import classNames from 'classnames/bind';
import styles from './MoviePlayer.module.scss';

const cx = classNames.bind(styles);

function MoviePlayer({ data }) {
    const videoRef = useRef(null);
    console.log(data)

    useEffect(() => {
        if (data && data.length > 0 && data[0].link_embed) {
            const video = videoRef.current;

            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(data[0].link_embed);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    video.play();
                });
                return () => {
                    hls.destroy();
                };
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = data[0].link_embed;
                video.addEventListener('loadedmetadata', () => {
                    video.play();
                });
            }
        }
    }, [data]);

    return (
        <video ref={videoRef} id="my-hls-video" width="100%" controls>
            Trình duyệt của bạn không hỗ trợ phát video.
        </video>
    );
}

export default MoviePlayer;
