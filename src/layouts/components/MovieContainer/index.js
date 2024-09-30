import React, { useState, useEffect } from 'react';
import Content from '~/components/Content';
import { fetchMovies } from '~/api/movieAPI';
import classNames from 'classnames';

function MovieContainer({ apis = [], sliderTitle, blockTitle, displayType, tags, page = 1, className }) {
    const [data, setData] = useState([]); // Dữ liệu phim
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi nếu có

    // Các bộ lọc mặc định
    const [filters, setFilters] = useState({
        genre: '',
        country: '',
        year: '',
        language: '',
        arrange: '',
        form: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Bắt đầu tải dữ liệu
                // Tạo mảng các URL API với bộ lọc page
                const apiUrls = apis.map((api) => `${api}?page=${page}`);
                // Gọi hàm fetchMovies với danh sách các API
                const movies = await fetchMovies(apiUrls, filters);
                setData(movies); // Lưu dữ liệu đã lọc
            } catch (error) {
                setError(error.message); // Lưu thông báo lỗi nếu có
            } finally {
                setLoading(false); // Tắt trạng thái loading
            }
        };

        fetchData(); // Gọi API khi component mount hoặc khi filters thay đổi
    }, [apis, filters]);

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div>Có lỗi xảy ra: {error}</div>;
    }

    return (
        <Content
            className={className}
            data={data}
            sliderTitle={sliderTitle}
            blockTitle={blockTitle}
            displayType={displayType}
            tags={tags}
        />
    );
}

export default MovieContainer;
