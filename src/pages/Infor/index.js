import classNames from 'classnames/bind';
import styles from './Infor.module.scss';

const cx = classNames.bind(styles);
function Infor() {
    return <div className={cx('wrapper')}></div>;
}

export default Infor;
