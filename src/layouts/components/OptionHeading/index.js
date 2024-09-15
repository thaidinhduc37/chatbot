import classNames from 'classnames/bind';

import styles from './OptionHeading.module.scss';

const cx = classNames.bind(styles);

function OptionHeading() {
    return <div className={cx('wrapper')}></div>;
}

export default OptionHeading;
