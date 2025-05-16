import React from 'react';
import classNames from 'classnames/bind';
import styles from './Infor.module.scss';

const cx = classNames.bind(styles);

const Infor = () => {
    return (
        <div className={cx('infor-page')}>
            <div className={cx('container')}>
                <div className={cx('breadcrumb')}>
                    <ul>
                        <li>
                            <a href="/">Trang chủ</a>
                        </li>
                        <li>Giới thiệu</li>
                    </ul>
                </div>

                <div className={cx('content')}>
                    <h1 className={cx('page-title')}>Giới thiệu về Cổng Dịch vụ công Quốc gia</h1>

                    <div className={cx('intro-text')}>
                        <p>
                            Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm trung tâm phục vụ, Cổng
                            Dịch vụ công Quốc gia kết nối, cung cấp thông tin về thủ tục hành chính và dịch vụ công trực
                            tuyến; hỗ trợ thực hiện, giám sát, đánh giá việc giải quyết thủ tục hành chính, dịch vụ công
                            trực tuyến và tiếp nhận, xử lý phản ánh, kiến nghị của cá nhân, tổ chức trên toàn quốc.
                        </p>

                        <p>
                            Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công Quốc gia tại địa chỉ duy nhất
                            www.dichvucong.gov.vn theo nhu cầu người dùng từ máy tính, máy tính bảng hoặc điện thoại di
                            động được kết nối internet để hưởng nhiều lợi ích từ Cổng Dịch vụ công Quốc gia, như:
                        </p>

                        <div className={cx('benefits-grid')}>
                            <div className={cx('benefit-item')}>
                                <div className={cx('benefit-icon', 'icon-register')}></div>
                                <div className={cx('benefit-content')}>
                                    Đăng ký và được cấp ngay một tài khoản của Cổng dịch vụ công Quốc gia để đăng nhập;
                                </div>
                            </div>

                            <div className={cx('benefit-item')}>
                                <div className={cx('benefit-icon', 'icon-search')}></div>
                                <div className={cx('benefit-content')}>
                                    Tra cứu thông tin, dịch vụ công các ngành, lĩnh vực, các địa phương tại Cơ sở dữ
                                    liệu quốc gia về thủ tục hành chính; Gửi phản ánh kiến nghị liên quan đến việc giải
                                    quyết thủ tục hành chính, dịch vụ công;
                                </div>
                            </div>

                            <div className={cx('benefit-item')}>
                                <div className={cx('benefit-icon', 'icon-support')}></div>
                                <div className={cx('benefit-content')}>
                                    Đề nghị hỗ trợ thực hiện thủ tục hành chính, dịch vụ công qua
                                    <strong> Tổng đài điện thoại 18001096 </strong>
                                    hoặc trực tuyến tại mục Hỗ trợ;
                                </div>
                            </div>

                            <div className={cx('benefit-item')}>
                                <div className={cx('benefit-icon', 'icon-track')}></div>
                                <div className={cx('benefit-content')}>
                                    Theo dõi toàn bộ quá trình giải quyết thủ tục hành chính và xử lý phản ánh kiến nghị
                                    của mình bằng cách cung cấp mã hồ sơ, kể cả mã hồ sơ thủ tục hành chính không thực
                                    hiện qua Cổng Dịch vụ công Quốc gia, Cổng Dịch vụ công của Bộ, ngành, địa phương;
                                </div>
                            </div>

                            <div className={cx('benefit-item')}>
                                <div className={cx('benefit-icon', 'icon-login')}></div>
                                <div className={cx('benefit-content')}>
                                    Đăng nhập bằng tài khoản Cổng dịch vụ công Quốc gia để đăng nhập các Cổng Dịch vụ
                                    công của Bộ, ngành, địa phương; không phải cập nhật các trường thông tin, tài liệu
                                    đã được lưu trữ trong tài khoản Cổng Dịch vụ công Quốc gia;
                                </div>
                            </div>

                            <div className={cx('benefit-item')}>
                                <div className={cx('benefit-icon', 'icon-database')}></div>
                                <div className={cx('benefit-content')}>
                                    Được hỗ trợ truy vấn thông tin của cá nhân, tổ chức lưu trữ tại các Cơ sở dữ liệu,
                                    Hệ thống thông tin đã tích hợp với Cổng Dịch vụ công Quốc gia như đăng ký kinh
                                    doanh, thuế, bảo hiểm,...;
                                </div>
                            </div>
                        </div>

                        <p>
                            Các Bộ, ngành, địa phương nỗ lực cùng với sự tham gia tích cực của người dân và doanh nghiệp
                            trong vận hành Cổng Dịch vụ công Quốc gia là góp phần xây dựng Chính phủ liêm chính, hành
                            động, phát triển, phục vụ Nhân Dân.
                        </p>

                        <p className={cx('highlight')}>Hãy truy cập www.dichvucong.gov.vn !</p>
                    </div>

                    <div className={cx('roadmap')}>
                        <h2>Lộ trình thực hiện</h2>

                        <div className={cx('timeline')}>
                            <div className={cx('timeline-item')}>
                                <div className={cx('year')}>Năm 2019</div>
                                <div className={cx('description')}>
                                    Kết nối, tích hợp cổng DVCQG với cổng DVC và hệ thống một cửa điện tử các Bộ, ngành,
                                    địa phương để thí điểm cung cấp một số dịch vụ công trực tuyến như: Cấp đổi giấy
                                    phép lái xe, cấp giấy phép lái xe quốc tế, thông báo thực hiện khuyến mại, đăng ký
                                    hoạt động khuyến mại, cấp điện mới từ lưới điện trung áp, cấp điện mới từ lưới điện
                                    hạ áp...
                                </div>
                            </div>

                            <div className={cx('timeline-item')}>
                                <div className={cx('year')}>Năm 2020</div>
                                <div className={cx('description')}>
                                    Tích hợp tối thiểu 30% các dịch vụ công trực tuyến thiết yếu.
                                </div>
                            </div>

                            <div className={cx('timeline-item')}>
                                <div className={cx('year')}>Sau năm 2020</div>
                                <div className={cx('description')}>
                                    Tăng dần mỗi năm tích hợp 20% dịch vụ công trực tuyến mức độ 3, 4 của các Bộ, ngành,
                                    địa phương.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infor;
