import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src="https://via.placeholder.com/60x60" alt="Logo" className={cx('logo-image')} />
                </div>
                <div className={cx('title')}>
                    <h1 className={cx('main-title')}>CỔNG HƯỚNG DẪN DỊCH VỤ CÔNG</h1>
                    <h2 className={cx('sub-title')}>Kết nối, cung cấp thông tin và dịch vụ công mọi lúc, mọi nơi</h2>
                </div>
                <div className={cx('right')}>
                    <select className={cx('language-select')}>
                        <option>Tiếng Việt</option>
                    </select>
                    <span className={cx('auth-links')}>
                        <a href="/login">Đăng nhập</a> | <a href="/register">Đăng ký</a>
                    </span>
                </div>
            </div>
            <nav className={cx('nav')}>
                <a href="/" className={cx('nav-item')}>
                    <span className={cx('icon-home')}>🏠</span>
                </a>
                <a href="/" className={cx('nav-item')}>
                    Giới thiệu
                </a>
                <a href="/" className={cx('nav-item')}>
                    Thủ tục hành chính
                </a>
                <a href="/dieu-huong" className={cx('nav-item')}>
                    Hỗ trợ nộp hồ sơ
                </a>
                <a href="/tro-ly-ao" className={cx('nav-item')}>
                    Trợ lý ảo
                </a>
                <a href="/" className={cx('nav-item')}>
                    Phản ánh - Kiến nghị
                </a>
                <a href="/tro-ly-ao" className={cx('nav-item')}>
                    Tra cứu hồ sơ
                </a>
                <a href="/" className={cx('nav-item')}>
                    Thống kê
                </a>
                <div className={cx('dropdown')}>
                    <span>Hỗ trợ</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
