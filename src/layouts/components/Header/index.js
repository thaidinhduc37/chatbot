import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('relative', 'content')}>
                    <div className={cx('logo-text')}>
                        <a href="/" className={cx('logo')}>
                            <img src={images.logo} alt="Chatbot hỗ trợ Dịch vụ công" className={cx('logo-img')} />
                        </a>
                        <div className={cx('text')}>
                            <h1 className={cx('title')}>CỔNG HƯỚNG DẪN NỘP HỒ SƠ DVC</h1>
                            <p className={cx('subtitle')}>
                                Kết nối, cung cấp thông tin và dịch vụ công mọi lúc, mọi nơi
                            </p>
                        </div>
                    </div>
                    <div className={cx('header-account')}>
                        <div className={cx('button')}>
                            <a href="https://dangky.dichvucong.gov.vn/register" className={cx('btn')}>
                                Đăng ký
                            </a>
                            <a
                                href="https://xacthuc.dichvucong.gov.vn/oauth2/authorize?response_type=code&amp;client_id=Np0ahpF4exnI6DS_4KuMK_TLHLEa&amp;scope=openid&amp;redirect_uri=https://dichvucong.gov.vn/p/home/dvc-trang-chu.html"
                                className={cx('btn')}
                            >
                                Đăng nhập
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-nav')}>
                <div className={cx('container')}>
                    <ul className={cx('nav-list')}>
                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                <span role="img" aria-label="home">
                                    🏠
                                </span>{' '}
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/gioi-thieu" className={cx('nav-link')}>
                                Giới thiệu
                            </a>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/dieu-huong" className={cx('nav-link')}>
                                Hỗ trợ nộp hồ sơ
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/tro-ly-ao" className={cx('nav-link')}>
                                Trợ lý ảo
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/tra-cuu" className={cx('nav-link')}>
                                Tra cứu hồ sơ
                            </a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/thong-ke" className={cx('nav-link')}>
                                Thống kê
                            </a>
                        </li>
                        <li className={cx('nav-item', 'dropdown')}>
                            <span className={cx('nav-link')}>Thủ tục hành chính</span>
                            <ul className={cx('dropdown-content')}>
                                <li>
                                    <a href="/huong-dan">Cấp, quản lý thẻ Căn cước</a>
                                </li>
                                <li>
                                    <a href="/cau-hoi">Đăng ký, quản lý cư trú</a>
                                </li>
                                <li>
                                    <a href="/cau-hoi">Đăng ký xe</a>
                                </li>
                            </ul>
                        </li>
                        <li className={cx('nav-item', 'dropdown')}>
                            <span className={cx('nav-link')}>Hỗ trợ</span>
                            <ul className={cx('dropdown-content')}>
                                <li>
                                    <a href="/huong-dan">Hướng dẫn</a>
                                </li>
                                <li>
                                    <a href="/cau-hoi">Câu hỏi thường gặp</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
