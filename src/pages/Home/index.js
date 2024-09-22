import classNames from 'classnames/bind';
import Content from '~/layouts/components/Content';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Content
                api={'https://phimapi.com/v1/api/tim-kiem?keyword=hay&limit=5'}
                sliderTitle={'PHIM ĐỀ CỬ'}
            />
            <Content
                api={'https://phimapi.com/v1/api/danh-sach/phim-le?page=1&limit=5'}
                page={2}
                blockTitle={'PHIM LẺ MỚI CẬP NHẬT'}
                tags={[
                    {
                        title: 'Phim Hành Động',
                        to: '/genre/phim-hanh-dong',
                    },
                    {
                        title: 'Phim Hoạt Hình',
                        to: '/genre/phim-hoat-hinh',
                    },
                    {
                        title: 'Phim Kinh Di',
                        to: '/genre/phim-kinh-di',
                    },
                    {
                        title: 'Phim Hài Hước',
                        to: '/genre/phim-hai-huoc',
                    },
                ]}
            />
            <Content
                api={'https://phimapi.com/v1/api/danh-sach/phim-le?page=1&limit=5'}
                blockTitle={'PHIM CHIẾU RẠP MỚI'}
                page={1}
                tags={[
                    {
                        title: '2023',
                        to: '/list/phim-nam-2023',
                    },
                    {
                        title: '2022',
                        to: '/list/phim-nam-2022',
                    },
                    {
                        title: '2021',
                        to: '/list/phim-nam-2021',
                    },
                    {
                        title: '2020',
                        to: '/list/phim-nam-2020',
                    },
                ]}
            />

            <Content
                api={'https://phimapi.com/v1/api/danh-sach/phim-bo?page=1&limit=5'}
                blockTitle={'PHIM BỘ MỚI CẬP NHẬT'}
                tags={[
                    {
                        title: 'Hàn Quốc',
                        to: '/country/phim-han-quoc',
                    },
                    {
                        title: 'Trung Quốc',
                        to: '/country/phim-trung-quốc',
                    },
                    {
                        title: 'Âu Mỹ',
                        to: '/country/phim-my',
                    },
                    {
                        title: 'Phim Bộ Full',
                        to: '/phim-bo',
                    },
                ]}
            />

            <Content
                api={'https://phimapi.com/v1/api/tim-kiem?keyword=hot&limit=5'}
                page={2}
                blockTitle={'PHIM THỊNH HÀNH'}
                tags={[
                    {
                        title: 'Phim Lẻ Thịnh Hành',
                        to: '/phim-le',
                    },
                    {
                        title: 'Phim Bộ Thịnh Hành',
                        to: '/phim-bo',
                    },
                ]}
            />

            <Content
                api={'https://phimapi.com/v1/api/tim-kiem?keyword=new&limit=5'}
                blockTitle={'PHIM MỚI SẮP CHIẾU'}
            />
        </div>
    );
}

export default Home;
