import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    const PHIM_MOI = [
        { title: 'Phim chiếu rạp', to: '/genre/phim-chieu-rap' },
        { title: 'Phim lẻ', to: '/phim-le' },
        { title: 'Phim bộ', to: '/phim-bo' },
        { title: 'Phim hành động', to: '/genre/phim-hanh-dong' },
        { title: 'Phim viễn tưởng', to: '/genre/phim-vien-tuong' },
        { title: 'Phim tâm lý', to: '/genre/phim-tam-ly' },
        { title: 'Phim hài hước', to: '/genre/phim-hai-huoc' },
    ];

    const PHIM_HAY = [
        { title: 'Phim Mỹ', to: '/country/phim-my' },
        { title: 'Phim Hàn Quốc', to: '/country/phim-han-quoc' },
        { title: 'Phim Trung Quốc', to: '/country/phim-trung-quoc' },
        { title: 'Phim Thái Lan', to: '/country/phim-thai-lan' },
        { title: 'Phim Việt Nam', to: '/country/phim-viet-nam' },
        { title: 'Phim Ma Kinh Dị', to: '/genre/phim-ma-kinh-di' },
        { title: 'Phim Hoạt Hình', to: '/genre/phim-hoat-hinh' },
    ];

    return (
        <footer className={cx('footer')}>
            <div className={cx('grid')}>
            <div className={cx('grid-row')}>
                <div className={cx('grid_column-6')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img className={cx('footer-img')} src={images.logo} alt="Mot-phim chill" />
                        <br></br>
                    </Link>
                    Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại phimmoi và dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư viện phim phong phú
                </div>
                <div className={cx('grid_column-6')}>
                    <h3 className={cx('footer-heading')}>Phim Mới</h3>
                    <ul className={cx('footer-list')}>
                        {PHIM_MOI.map((footerItem, index) => (
                            <li key={index} className={cx('footer-item')}>
                                <Link className={cx('footer-item-a')} to={footerItem.to}>
                                    {footerItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('grid_column-6')}>
                    <h3 className={cx('footer-heading')}>Phim Hay</h3>
                    <ul className={cx('footer-list')}>
                        {PHIM_HAY.map((footerItem, index) => (
                            <li key={index} className={cx('footer-item')}>
                                <Link className={cx('footer-item-a')} to={footerItem.to}>
                                    {footerItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('grid_column-6')}>
                    <h3 className={cx('footer-heading')}>Phim Hot</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/home'}>Phimmoi</Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/sitemap'}>Sitemap</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('grid_column-6')}>
                    <h3 className={cx('footer-heading')}>Trợ giúp</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/hoi-dap'}>Hỏi đáp</Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/lien-he'}>Liên hệ</Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/tin-tuc'}>Tin tức</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('grid_column-6')}>
                    <h3 className={cx('footer-heading')}>Thông tin</h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/hoi-dap'}>Điều khoản sử dụng</Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/lien-he'}>Chính sách riêng tu</Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link className={cx('footer-item-a')} to={'/tin-tuc'}>Khiếu nại bản quyền</Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <h4 className={cx('footer-item-h4')}>@2021 PhimChill.Net</h4>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
           
        </footer>
    );
}

export default Footer;
