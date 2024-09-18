import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ContentItem.module.scss';
import images from '~/assets/images';
import Image from '../Image';

const cx = classNames.bind(styles);

function ContentItem({ data }) {

    let srcImage;
    if(data.thumb_url.includes("https://phimimg.com/")){
        srcImage = data.thumb_url
    } else{
        srcImage = `https://phimimg.com/${data.thumb_url}`
    }

    return (
        <Link to={`/infor/${data.slug}`} className={cx('wrapper')}>
            <Image className={cx('content-img')} src={srcImage}></Image>
            <div className={cx('content-label')}>Hoàn Tất (Vietsub)</div>
            <div className={cx('content-name')}>{data.name}</div>
            <div className={cx('content-play-btn')}>
                <div className={cx('content-circel')}></div>
                <div className={cx('content-play')}></div>
            </div>
        </Link>
    );
}

export default ContentItem;
