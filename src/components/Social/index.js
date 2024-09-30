import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import styles from './Social.module.scss';

const cx = classNames.bind(styles);

function Social() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseOver = (rate) => {
        setHoverRating(rate);
    };

    const handleMouseOut = () => {
        setHoverRating(0);
    };

    const handleRating = (rate) => {
        setRating(rate);
    };

    const getTitle = (rate) => {
        switch (rate) {
            case 1:
                return 'Dở tệ';
            case 2:
                return 'Dở';
            case 3:
                return 'Không hay';
            case 4:
                return 'Bình thường';
            case 5:
                return 'Xem được';
            case 6:
                return 'Có vẻ hay';
            case 7:
                return 'Hay';
            case 8:
                return 'Rất hay';
            case 9:
                return 'Hay tuyệt';
            case 10:
                return 'Đỉnh nóc, kịch trần, bay phấp phới';
            default:
                return '';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('social-item')}>
                <Button
                    className={cx('btn', 'btn-infor')}
                    leftIcon={<FontAwesomeIcon icon={faThumbsUp} className={cx('fa')} />}
                    title={'Thích 4'}
                />
                <Button
                    className={cx('btn', 'btn-infor')}
                    leftIcon={<FontAwesomeIcon icon={faShare} className={cx('fa')} />}
                    title={'Chia sẻ'}
                />
                <div className={cx('box-rating')}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                        <FontAwesomeIcon
                            key={star}
                            icon={faStar}
                            className={cx('star', { 'star-selected': star <= (hoverRating || rating) })}
                            onMouseOver={() => handleMouseOver(star)}
                            onMouseOut={handleMouseOut}
                            onClick={() => handleRating(star)}
                        />
                    ))}
                    <div className={cx('rating')}>
                        <span className={cx('rating-text')}>{`(Đánh giá: ${hoverRating || rating}/10)`}</span>
                        <span className={cx('rating-small')}>{getTitle(hoverRating || rating)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;
