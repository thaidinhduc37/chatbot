import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>CỔNG HƯỚNG DẪN DỊCH VỤ CÔNG</h2>
                <p className={cx('address')}>Địa chỉ: 17 Phù Đổng - Quảng Phú - Cư M'gar - Đắk Lắk</p>
                <p className={cx('email')}>
                    Email: <a href="mailto:qlhc.ttxh.648@gmail.com">qlhc.ttxh.648@gmail.com</a>
                </p>
                <p className={cx('support')}>Hỗ trợ</p>
            </div>
            <div className={cx('bottom')}>
                <p>
                    Cơ quan chủ quản: ĐỘI CẢNH SÁT QLHC VỀ TTXH
                    <br />
                    Khi sử dụng lại thông tin, đề nghị ghi rõ nguồn "Đội Cảnh sát QLHC về TTXH - Công an huyện Cư M'gar"
                </p>
                <div className={cx('logo')}>
                    <img src="https://via.placeholder.com/150x50" alt="NCSC Logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
