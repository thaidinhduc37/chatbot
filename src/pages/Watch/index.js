import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import EpisodesList from '~/components/EpisodesList';
import Button from '~/components/Button';
import Content from '~/layouts/components/Content';
import styles from './Watch.module.scss';
import MoviePlayer from '~/components/MoviePlayer';
import Social from '~/components/Social';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

function Watch() {
    const { slug } = useParams();
    const [data, setData] = useState([]); // State để lưu dữ liệu từ API
    const [episodes, setEpisodes] = useState([]); // State để lưu tập phim
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi nếu có

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://phimapi.com/phim/${slug}`);

                if (response.data) {
                    setData(response.data.movie);
                    setEpisodes(response.data.episodes[0]?.server_data || []);
                } else {
                    setData([]);
                    setEpisodes([]);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div>Có lỗi xảy ra: {error}</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('block-note')}>
                Truy cập <font color="red">PhimMoiPlus.Net</font> sẽ chuyển tới link PhimMoiChill mới nhất
            </div>
            <div className={cx('gnarty-offads')}></div>
            <Breadcrumb data={data} />
            <div
                className={cx('box-players')}
                style={{ background: `url(${data.thumb_url}) no-repeat center`, backgroundSize: 'cover' }}
            >
                <div className={cx('player')}>
                    <div className={cx('player-area')}>
                        <MoviePlayer data={episodes} />
                    </div>
                </div>
                <div className={cx('film-note')}></div>
                <div className={cx('gnarty-offads')}></div>
                <div className={cx('option')}></div>
            </div>
            <div className={cx('pm-server')}></div>
            <div className={cx('list-server')}></div>
            <Social />
            <div className={cx('film-infor')}></div>
            <Content
                api={'https://phimapi.com/v1/api/tim-kiem?keyword=hay&limit=5'}
                sliderTitle={'CÓ THỂ BẠN CŨNG MUỐN XEM'}
            />
            <Content api={'https://phimapi.com/v1/api/tim-kiem?keyword=new&limit=5'} sliderTitle={'PHIM ĐỀ CỬ MỚI'} />
        </div>
    );
}

export default Watch;
