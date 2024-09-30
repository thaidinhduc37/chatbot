import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ContentItem from '../ContentItem';
import styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Content({ data, tags, sliderTitle, blockTitle, displayType, className }) {
    let visibleData;
    switch (displayType) {
        case 'slider':
            visibleData = data.slice(0, 5);
            break;
        case 'five':
            visibleData = data.slice(0, 5);
            break;
        case 'ten':
            visibleData = data.slice(0, 10);
            break;
        case 'listmovie':
            visibleData = data.slice(0, 25);
            break;
        case 'trending':
            visibleData = data.slice(0, 7);
            break;
        case 'featured':
            visibleData = data.slice(0, 11);
            break;
        default:
            visibleData = data; // Fallback nếu không có displayType
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Hiển thị 5 phim mỗi lần
        slidesToScroll: 5, // Cuộn 5 phim mỗi khi đổi
        autoplay: true,
        autoplaySpeed: 5000, // Thay đổi slide sau mỗi 5 giây
        pauseOnHover: true,
    };

    return (
        <div className={cx('wrapper')}>
            {sliderTitle && <h1 className={cx('header-title')}>{sliderTitle}</h1>}
            {blockTitle && (
                <div className={cx('header-wrapper')}>
                    <h1 className={cx('header-title')}>{blockTitle}</h1>
                    {Array.isArray(tags) &&
                        tags.map((tag, tagIndex) => (
                            <Link key={tagIndex} className={cx('header-tag')} to={tag.to}>
                                {tag.title}
                            </Link>
                        ))}
                    <Link className={cx('header-tag', 'header-viewall')}>
                        Xem tất cả
                        <FontAwesomeIcon icon={faCaretRight} />
                    </Link>
                </div>
            )}
            <div
                className={cx('content', {
                    'two-rows': displayType === 'ten',
                    'featured-layout': displayType === 'featured',
                    'trending-layout': displayType === 'trending',
                    'slider-layout': displayType === 'slider',
                })}
            >
                {displayType === 'slider' ? (
                    <>
                        {visibleData.map((item, index) => (
                            <ContentItem className={className} key={index} data={item} />
                        ))}
                    </>
                ) : displayType === 'trending' ? (
                    <>
                        <div className={cx('large-content')}>
                            <ContentItem data={visibleData[0]} className={cx('large-item')} />
                        </div>
                        <div className={cx('side-content', className)}>
                            {visibleData.slice(1, 7).map((item, index) => (
                                <ContentItem key={index} data={item} className={cx('small-item', className)} />
                            ))}
                        </div>
                    </>
                ) : displayType === 'featured' ? (
                    <>
                        <div className={cx('large-content')}>
                            <ContentItem data={visibleData[0]} className={cx('large-item')} />
                        </div>
                        <div className={cx('side-content', className)}>
                            {visibleData.slice(1, 7).map((item, index) => (
                                <ContentItem key={index} data={item} className={cx('small-item', className)} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={cx('block_content-side')}>
                        {visibleData.map((item, index) => (
                            <ContentItem key={index} data={item} className={cx('small-item', className)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Content;
