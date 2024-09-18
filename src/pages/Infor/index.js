import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Content from '~/layouts/components/Content';
import styles from './Infor.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faHouseChimney, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Infor() {
    const { slug } = useParams();
    const [data, setData] = useState([]); // State để lưu dữ liệu từ API
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi nếu có
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://phimapi.com/phim/${slug}`);

                // Kiểm tra dữ liệu trả về từ API

                // Sử dụng optional chaining để đảm bảo data và items tồn tại

                if (response.data) {
                    setData(response.data.movie); // Nếu items là mảng, lưu vào state
                } else {
                    setData([]); // Nếu không, lưu mảng rỗng
                }
            } catch (error) {
                setError(error.message); // Lưu thông báo lỗi nếu có
            } finally {
                setLoading(false); // Tắt trạng thái loading
            }
        };

        fetchData(); // Gọi hàm fetchData
    }, [slug]); // useEffect chỉ chạy một lần khi component mount

    const categories = data.category || [];
    const countries = data.country;
    const episodes = data.episodes || [];
    const actors = data.actor;

    if (loading) {
        return <div>Đang tải dữ liệu...</div>; // Hiển thị loading
    }

    if (error) {
        return <div>Có lỗi xảy ra: {error}</div>; // Hiển thị lỗi nếu có
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ul className={cx('breadcrumb')} itemscope="" itemtype="https://schema.org/BreadcrumbList">
                    <li itemprop={cx('itemListElement')} itemscope="" itemtype="https://schema.org/ListItem">
                        <a itemprop="item" href="/" title="Xem phim">
                            <span itemprop="name">
                                <FontAwesomeIcon className={cx('fa')} icon={faHouseChimney} /> Xem phim
                                <FontAwesomeIcon className={cx('fa')} icon={faAngleRight} />
                            </span>
                        </a>
                        <meta itemprop="position" content="1" />
                    </li>
                    {categories.length > 0 && (
                        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a
                                itemprop="item"
                                href={`https://phimmoichill2.net/genre/${categories[0].slug}`}
                                title={categories[0].name}
                            >
                                <span itemprop="name">
                                    {categories[0].name}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </a>
                            <meta itemprop="position" content="2" />
                        </li>
                    )}
                    <li> {data.name} </li>
                </ul>
                <div className={cx('film-infor')}>
                    <div
                        className={cx('image')}
                        style={{ background: `url(${data.thumb_url}) no-repeat center`, backgroundSize: 'cover' }}
                    >
                        <Image className={cx('avatar')} alt={data.name} src={data.thumb_url} />
                        <Link className={cx('icon-play')} to={`/watch/${data.slug}`} />
                        <div className={cx('text')}>
                            <h1>{data.name}</h1>
                            <h2>{data.origin_name}</h2>
                            <ul className={cx('list-button')}>
                                <li>
                                    <Link
                                        to={`/watch/${data.trailer_url}`}
                                        className={cx('link', 'btn', 'btn-infor')}
                                    ></Link>
                                    <FontAwesomeIcon icon={faYoutube} className={cx('fa')} />
                                    Trailer
                                </li>
                                <li>
                                    <Link
                                        to={`/watch/${data.episodes}`}
                                        className={cx('link', 'btn', 'btn-danger')}
                                    ></Link>
                                    <FontAwesomeIcon icon={faPlayCircle} className={cx('fa')} />
                                    Xem phim
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('episodes')}></div>
                    <div className={cx('text')}>
                        <div className={cx('social')}></div>
                        <ul className={cx('entry-meta', 'block film')}>
                            <li>
                                <label>Đang phát: </label>
                                <span>Full HD</span>
                            </li>
                            <li>
                                <label>Năm phát hành: </label>
                                <Link to={`/list/phim-nam-${data.year}`}>{`Năm ${data.year}`}</Link>
                            </li>
                            <li>
                                <label>Quốc gia: </label>
                                <Link to={`/country/phim-${countries[0].slug}`}>{`Phim ${countries[0].name}`}</Link>
                            </li>
                            <li>
                                <label>Thể loại: </label>
                                <Link to={`/genre/phim-${categories[0].slug}`}>{`Phim ${categories[0].name}`}</Link>
                            </li>
                            <li>
                                <label>Đạo diễn: </label>
                                <Link to={'/dao-dien'}>{data.director}</Link>
                            </li>
                            <li>
                                <label>Thời lượng: </label>
                                <span>{`${data.episode_total} tập`}</span>
                            </li>
                        </ul>
                        <div className={cx('content')}></div>
                        <div className={cx('block-film')}></div>
                        <div className={cx('block-film')}></div>
                    </div>
                    <div className={cx('comment')}></div>
                    <Content
                        className={cx('film-related')}
                        api={'danh-sach/phim-moi-cap-nhat'}
                        sliderTitle={'CÓ THỂ BẠN CŨNG MUỐN XEM'}
                    />
                    <Content api={'v1/api/danh-sach/phim-le'} sliderTitle={'PHIM ĐỀ CỬ MỚI'} />
                </div>
            </div>
        </div>
    );
}

export default Infor;
