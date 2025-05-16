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
                                <button className={cx('btn', 'btn-primary')}>
                                    Chức năng hỗ trợ, điều hướng công dân thực hiện nộp hồ sơ trên Cổng dịch vụ công
                                    Quốc gia
                                </button>
                            </div>
                            <div className={cx('col-md-4')}>
                                <button className={cx('btn', 'btn-primary')}>
                                    Trợ lý ảo hướng dẫn thủ tục, cách thức thực hiện
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className={cx('introduction')}>
                <div className={cx('container')}>
                    <div className={cx('targetgroup-area')}>
                        <div className={cx('targetgroup')}>
                            <h2 className={cx('targetgroup-title')}>CÔNG DÂN</h2>
                            <div className={cx('targetgroup-content')}>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-baby')}></i>
                                    <span>Có con nhỏ</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-education')}></i>
                                    <span>Học tập</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-job')}></i>
                                    <span>Việc làm</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-id')}></i>
                                    <span>Cư trú và giấy tờ tùy thân</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-family')}></i>
                                    <span>Hôn nhân và gia đình</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-house')}></i>
                                    <span>Điện lực, nhà ở, đất đai</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-health')}></i>
                                    <span>Sức khỏe và y tế</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-vehicle')}></i>
                                    <span>Phương tiện và người lái</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-retirement')}></i>
                                    <span>Hưu trí</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-death')}></i>
                                    <span>Người thân qua đời</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-complaint')}></i>
                                    <span>Giải quyết khiếu kiện</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('targetgroup')}>
                            <h2 className={cx('targetgroup-title')}>DOANH NGHIỆP</h2>
                            <div className={cx('targetgroup-content')}>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-startup')}></i>
                                    <span>Khởi sự kinh doanh</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-insurance')}></i>
                                    <span>Lao động và bảo hiểm xã hội</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-finance')}></i>
                                    <span>Tài chính doanh nghiệp</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-construction')}></i>
                                    <span>Điện lực, đất đai, xây dựng</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-trade')}></i>
                                    <span>Thương mại, quảng cáo</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-intellectual')}></i>
                                    <span>Sở hữu trí tuệ, đăng ký tài sản</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-branch')}></i>
                                    <span>Thành lập chi nhánh, văn phòng đại diện</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-tender')}></i>
                                    <span>Đấu thầu, mua sắm công</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-restructure')}></i>
                                    <span>Tái cấu trúc doanh nghiệp</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-dispute')}></i>
                                    <span>Giải quyết tranh chấp hợp đồng</span>
                                </div>
                                <div className={cx('service-item')}>
                                    <i className={cx('icon-stop')}></i>
                                    <span>Tạm dừng, chấm dứt hoạt động</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Services Section */}
            <section className={cx('onlineServices')}>
                <div className={cx('container')}>
                    <h2 className={cx('sectionTitle')}>Dịch vụ công liên thông</h2>
                    <div className={cx('serviceGrid')}>
                        <div className={cx('serviceCard', 'highlight')}>
                            <h3 className={cx('serviceTitle')}>Khai sinh, Khai tử</h3>
                            <p className={cx('serviceDescription')}>
                                Thực hiện thủ tục đăng ký khai sinh, khai tử trực tuyến
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
