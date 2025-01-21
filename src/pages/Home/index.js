import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            {/* Search Bar */}
            <div className={cx('searchBar')}>
                <div className={cx('banner')}>
                    <img src="https://via.placeholder.com/1200x200" alt="Banner" className={cx('bannerImage')} />
                </div>
                <div className={cx('searchContainer')}>
                    <input type="text" className={cx('searchInput')} placeholder="Nhập từ khóa tìm kiếm" />
                    <button className={cx('searchButton')}>Tìm kiếm</button>
                </div>
            </div>
            {/* Introduction Section */}
            <section className={cx('introduction')}>
                <h2 className={cx('sectionTitle')}>Giới thiệu thủ tục hành chính mới</h2>
                <div className={cx('cards')}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className={cx('card')} key={index}>
                            <img
                                src="https://via.placeholder.com/50"
                                alt={`Icon ${index + 1}`}
                                className={cx('cardIcon')}
                            />
                            <p className={cx('cardText')}>Thủ tục hành chính {index + 1}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Online Services Section */}
            <section className={cx('onlineServices')}>
                <h2 className={cx('sectionTitle')}>Dịch vụ công trực tuyến</h2>
                <ul className={cx('servicesList')}>
                    <li>Đăng ký tài khoản và theo dõi tình trạng hồ sơ</li>
                    <li>Thực hiện nộp hồ sơ trực tuyến cho các dịch vụ công</li>
                    <li>Tra cứu hồ sơ và kết quả xử lý</li>
                </ul>
            </section>
            {/* Statistics Section */}
            <section className={cx('statistics')}>
                <h2 className={cx('sectionTitle')}>Thống kê số lượng hồ sơ</h2>
                <div className={cx('stats')}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className={cx('stat')} key={index}>
                            <h3 className={cx('statTitle')}>2023</h3>
                            <p className={cx('statText')}>Số lượng hồ sơ: {index + 1}892</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
