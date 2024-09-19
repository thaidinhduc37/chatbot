import classNames from 'classnames/bind';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import ContentItem from '~/components/ContentItem';
import styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Content({api, tags, sliderTitle, blockTitle, itemCount = 5, className }) {
    const [data, setData] = useState([]); // State để lưu dữ liệu từ API
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi nếu có
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://phimapi.com/${api}?page=1&limit=${itemCount}`
                );

                let items;
                if(api.includes("v1")){
                    items = response.data?.data?.items;
                } else {
                    items = response.data?.items;
                }
                // Kiểm tra dữ liệu trả về từ API

                // Sử dụng optional chaining để đảm bảo data và items tồn tại

                if (Array.isArray(items)) {
                    setData(items); // Nếu items là mảng, lưu vào state
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
    }, []); // useEffect chỉ chạy một lần khi component mount

    if (loading) {
        return <div>Đang tải dữ liệu...</div>; // Hiển thị loading
    }

    if (error) {
        return <div>Có lỗi xảy ra: {error}</div>; // Hiển thị lỗi nếu có
    }
    const visibleData = data.slice(0, itemCount);

    return (
        <div className={cx('wrapper')}>
            {sliderTitle && <h1 className={cx('header-title')}>{sliderTitle}</h1>}
            {blockTitle && (
                <div className={cx('header-wrapper')}>
                    <h1 className={cx('header-title')}>{blockTitle}</h1>
                    {Array.isArray(tags) &&
                        tags.map((tag, tagIndex) => (
                            <Link key={tagIndex} className={cx('header-tag')} to={tag.to}>
                                {tag.title}
                            </Link>
                        ))}
                    <Link className={cx('header-tag', 'header-viewall')}>
                        Xem tất cả
                        <FontAwesomeIcon icon={faCaretRight} />
                    </Link>
                </div>
            )}
            <div className={cx('content')}>
                {visibleData.map((item, index) => (
                    <ContentItem key={index} data={item}/> // Render ContentItem với dữ liệu từ API
                ))}
            </div>
        </div>
    );
}

export default Content;
