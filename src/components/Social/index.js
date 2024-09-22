import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import styles from './Social.module.scss';

const cx = classNames.bind(styles);

function Social() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('social-item')}>
                <Button
                    className={cx('btn', 'btn-infor')}
                    leftIcon={<FontAwesomeIcon icon={faThumbsUp} className={cx('fa')} />}
                    to={'/'}
                    title={'Thích 4'}
                />
                <Button
                    className={cx('btn', 'btn-infor')}
                    leftIcon={<FontAwesomeIcon icon={faShare} className={cx('fa')} />}
                    to={'/'}
                    title={'Chia sẻ'}
                />
                <div className={cx('box-rating')}></div>
            </div>
        </div>
    );
}

export default Social;
