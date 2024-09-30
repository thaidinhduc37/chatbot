import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { MAIN_MENU } from '~/layouts/components/Header';
import styles from './MovieLayout.module.scss';
import ListOrder from '~/components/ListOrder';
import Button from '~/components/Button';
import Breadcrumb from '~/components/Breadcrumb';
import MovieContainer from '~/layouts/components/MovieContainer';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);
const findTitles = (slug, menu) => {
    for (const item of menu) {
        if (item.children) {
            const found = findTitles(slug, item.children);
            if (found) return found;
        } else {
            // Lấy phần cuối của item.to để so sánh với slug
            const itemSlug = item.to.split('/').pop();
            if (itemSlug === slug) {
                return item.title;
            }
        }
    }
    return null;
};

const listGenres = MAIN_MENU[3].children.map((item) => item.title);
const listCountries = MAIN_MENU[4].children.map((item) => item.title);
const listYears = MAIN_MENU[5].children.map((item) => item.title);
const listLanguage = ['Phụ Đề', 'Thuyết Minh'];

const listArrange = ['Thời Gian Cập Nhật', 'Lượt Xem', 'Năm Sản Xuất'];

const listForm = ['Phim Lẻ', 'Phim Bộ'];

function MovieLayout({ title }) {
    const [currentPage, setCurrentPage] = useState(1);
    const { slug } = useParams();
    const foundTitle = slug ? findTitles(slug, MAIN_MENU) : title;
    useEffect(() => {
        if (foundTitle) {
            if (foundTitle.includes('Phim')) {
                document.title = `${foundTitle} | Phim Chill`;
            }
            document.title = `Phim ${foundTitle} | Phim Chill`;
        }
    }, [foundTitle]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    <h1 className={cx('title')}>
                        {foundTitle
                            ? foundTitle.includes('Phim')
                                ? foundTitle
                                : `Phim ${foundTitle}`
                            : 'PHIM MOI CHILL'}
                    </h1>
                    <div className={cx('order')}>
                        <ul className={cx('list-oder')}>
                            <li className={cx('list-item')}>
                                <ListOrder data={listGenres} title={'Thể loại'} />
                            </li>
                            <li className={cx('list-item')}>
                                <ListOrder data={listCountries} title={'Quốc gia'} />
                            </li>
                            <li className={cx('list-item')}>
                                <ListOrder data={listYears} title={'Năm phát hành'} />
                            </li>
                            <li className={cx('list-item')}>
                                <ListOrder data={listLanguage} title={'Ngôn ngữ'} />
                            </li>
                            <li className={cx('list-item')}>
                                <ListOrder data={listArrange} title={'Sắp xếp'} />
                            </li>
                            <li className={cx('list-item')}>
                                <ListOrder data={listForm} title={'Hình Thức'} />
                            </li>
                            <li className={cx('list-item')}>
                                <Button className={cx('list-item-btn')} title={'Tìm kiếm'} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('text')}>
                    <Breadcrumb title={foundTitle} />
                    <div className={cx('description')}>
                        Khám phá danh sách
                        <Link to={''} className={cx('description-link')}>
                            {foundTitle.includes('Phim') ? foundTitle : `Phim ${foundTitle}`}
                        </Link>
                        mới nhất và hấp dẫn, cập nhật liên tục trên phimmoi.net . Tải xuống hơn 100.000+ bộ phim nam
                        2020 Vietsub, thuyết minh đang thịnh hành và hay nhất tháng 09 2024.
                    </div>
                </div>
                <div className={cx('list-movie')}>
                    <div className={cx('list-movie-item')}>
                        <MovieContainer
                            apis={[
                                'https://phimapi.com/v1/api/danh-sach/phim-le',
                                'https://phimapi.com/v1/api/danh-sach/phim-bo',
                            ]}
                            displayType={'listmovie'}
                            page={currentPage}
                        />
                    </div>
                    <div className={cx('panigation')}>
                        <Pagination totalPages={512} onPageChange={setCurrentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieLayout;
