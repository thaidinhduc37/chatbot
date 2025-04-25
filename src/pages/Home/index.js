import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            {/* Search Bar */}
            <div
                className={cx('searchBar')}
                style={{
                    backgroundImage: 'url(https://dichvucong.gov.vn/p/home/theme/img/home/banner.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: '40px 0',
                }}
            >
                <div className={cx('container')}></div>
                <div className={cx('maxw991')}>
                    <div className={cx('form-group')}>
                        <div className={cx('box-search')}>
                            <input type="text" className={cx('search-input')} placeholder="Nhập từ khóa tìm kiếm" />
                            <div className={cx('search-select')}>Tìm kiếm nâng cao</div>
                            <button className={cx('search-button')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                            </button>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('row')}>
                            <div className={cx('col-md-4')}>
                                <button className={cx('btn', 'btn-primary')}>Dịch vụ công trực tuyến</button>
                            </div>
                            <div className={cx('col-md-4')}>
                                <button className={cx('btn', 'btn-primary')}>Chức năng hỗ trợ, điều hướng công dân thực hiện nộp hồ sơ trên Cổng dịch vụ công Quốc gia</button>
                            </div>
                            <div className={cx('col-md-4')}>
                                <button className={cx('btn', 'btn-primary')}>Trợ lý ảo hướng dẫn thủ tục, cách thức thực hiện</button>
                            </div>
                        </div>
                    </div>
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
