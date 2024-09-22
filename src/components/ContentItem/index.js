import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ContentItem.module.scss';
import images from '~/assets/images';
import Image from '../Image';

const cx = classNames.bind(styles);

function ContentItem({ data, className }) {
    let srcImage;
    if (data.thumb_url.includes('https://phimimg.com/')) {
        srcImage = data.thumb_url;
    } else {
        srcImage = `https://phimimg.com/${data.thumb_url}`;
    }

    let label;
    if (data.episode_current.includes('Full')) {
        label = `Full HD | ${data.lang}`;
    } else if (data.episode_current.includes('Hoàn')) {
        label = `${data.episode_current}`;
    } else {
        label = `${data.episode_current} | ${data.lang} `;
    }

    return (
        <Link to={`/infor/${data.slug}`} className={cx('wrapper', className)}>
            <Image className={cx('content-img', className)} src={srcImage}></Image>
            <div className={cx('content-label', className)}>{label}</div>
            <div className={cx('content-name', className)}>{data.name}</div>
            <div className={cx('content-play-btn', className)}>
                <div className={cx('content-circel', className)}></div>
                <div className={cx('content-play', className)}></div>
            </div>
        </Link>
    );
}

export default ContentItem;
