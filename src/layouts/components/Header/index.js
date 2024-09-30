import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import Search from '~/layouts/components/Search';
import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss'; // Import file SCSS

const cx = classNames.bind(styles);

export const MAIN_MENU = [
    { title: 'Phimmoi', to: '/' },
    { title: 'Phim lẻ', to: '/list/phim-le' },
    { title: 'Phim bộ', to: '/list/phim-bo' },
    {
        title: 'Thể loại',
        children: [
            { title: 'Phim Hành Động', to: '/genre/phim-hanh-dong' },
            { title: 'Phim Tình Cảm', to: '/genre/phim-tinh-cam' },
            { title: 'Phim Hài Hước', to: '/genre/phim-hai-huoc' },
            { title: 'Phim Cổ Trang', to: '/genre/phim-co-trang' },
            { title: 'Phim Tâm Lý', to: '/genre/phim-tam-ly' },
            { title: 'Phim Hình Sự', to: '/genre/phim-hinh-su' },
            { title: 'Phim Chiến Tranh', to: '/genre/phim-chien-tranh' },
            { title: 'Phim Võ Thuật', to: '/genre/phim-vo-thuat' },
            { title: 'Phim Hoạt Hình', to: '/genre/phim-hoat-hinh' },
            { title: 'Phim Viễn Tưởng', to: '/genre/phim-vien-tuong' },
            { title: 'Phim Phiêu Lưu', to: '/genre/phim-phieu-luu' },
            { title: 'Phim Ma - Kinh Dị', to: '/genre/phim-ma-kinh-di' },
            { title: 'Phim Âm Nhạc', to: '/genre/phim-am-nhac' },
            { title: 'Phim Thần Thoai', to: '/genre/phim-than-thoai' },
            { title: 'Phim Truyền Hình', to: '/genre/phim-truyen-hinh' },
            { title: 'Phim Thuyết Minh', to: '/genre/phim-thuyet-minh' },
        ],
    },
    {
        title: 'Quốc gia',
        children: [
            { title: 'Phim Trung Quốc', to: '/country/phim-trung-quoc' },
            { title: 'Phim Nhật Bản', to: '/country/phim-nhat-ban' },
            { title: 'Phim Thái Lan', to: '/country/phim-thai-lan' },
            { title: 'Phim Tổng Hợp', to: '/country/phim-tong-hop' },
            { title: 'Phim Ấn Độ', to: '/country/phim-an-do' },
            { title: 'Phim Hàn Quốc', to: '/country/phim-han-quoc' },
            { title: 'Phim Âu Mỹ', to: '/country/phim-au-my' },
            { title: 'Phim Đài Loan', to: '/country/phim-dai-loan' },
            { title: 'Phim Hồng Kông', to: '/country/phim-hong-kong' },
        ],
    },
    {
        title: 'Năm phát hành',
        children: [
            { title: 'Năm 2024', to: '/list/phim-nam-2024' },
            { title: 'Năm 2023', to: '/list/phim-nam-2023' },
            { title: 'Năm 2022', to: '/list/phim-nam-2022' },
            { title: 'Năm 2021', to: '/list/phim-nam-2021' },
            { title: 'Năm 2020', to: '/list/phim-nam-2020' },
            { title: 'Năm 2019', to: '/list/phim-nam-2019' },
            { title: 'Năm 2018', to: '/list/phim-nam-2018' },
            { title: 'Năm 2017', to: '/list/phim-nam-2017' },
            { title: 'Năm 2016', to: '/list/phim-nam-2016' },
            { title: 'Năm 2015', to: '/list/phim-nam-2015' },
            { title: 'Năm 2014', to: '/list/phim-nam-2014' },
            { title: 'Năm 2013', to: '/list/phim-nam-2013' },
            { title: 'Năm 2012', to: '/list/phim-nam-2012' },
            { title: 'Năm 2011', to: '/list/phim-nam-2011' },
            { title: 'Năm 2010', to: '/list/phim-nam-2010' },
            { title: 'Phim trước 2010', to: '/list/phim-truoc-2010' },
        ],
    },
    { title: 'Phim chiếu rạp', to: '/genre/phim-chieu-rap' },
    { title: 'Trailer', to: '/genre/phim-sap-chieu' },
    {
        title: 'TOP PHIM',
        classNames: 'active',
        children: [
            { title: 'Top IMDB', to: '/list/phim-nam-2024' },
            { title: 'Phim Netflix', to: '/list/phim-nam-2023' },
            { title: 'Phim Marvel', to: '/list/phim-nam-2022' },
            { title: 'Phim Hot', to: '/list/phim-nam-2021' },
            { title: 'Phim DC Comic', to: '/list/phim-nam-2020' },
            { title: 'Phim HD', to: '/list/phim-nam-2019' },
        ],
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img className={cx('logo-avatar')} src={images.logo} alt="Mot-phim chill" />
                </Link>
                <ul className={cx('main-menu')}>
                    {MAIN_MENU &&
                        MAIN_MENU.map((menuItem, index) => (
                            <li key={index} className={cx('menu-item')}>
                                <Link
                                    className={cx('menu_item-link', menuItem.classNames)}
                                    title={menuItem.title}
                                    to={menuItem.to}
                                >
                                    {menuItem.title}
                                </Link>
                                {menuItem.children && Array.isArray(menuItem.children) && (
                                    <ul className={cx('children-menu')}>
                                        {menuItem.children.map((child, childIndex) => (
                                            <li className={cx('children-item')} key={childIndex}>
                                                <Link className={cx('children_item-link')} to={child.to}>
                                                    {child.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
                <Search />
            </div>
        </header>
    );
}

export default Header;
