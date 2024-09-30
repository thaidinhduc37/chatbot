import axios from 'axios';

// Hàm fetchMovies hỗ trợ nhiều API hơn
export const fetchMovies = async (apiUrls, filters = {}) => {
    try {
        // Xây dựng URL với bộ lọc
        const filterURL = buildFilterURL(filters);

        // Gọi tất cả các API với URL đã được thêm bộ lọc
        const responses = await Promise.all(apiUrls.map((api) => axios.get(`${api}${filterURL}`)));

        // Gộp dữ liệu từ các phản hồi API
        const items = responses.flatMap((response, index) => {
            // Kiểm tra dữ liệu trả về tùy theo API v1 hoặc các version khác
            let dataItems = apiUrls[index].includes('v1') ? response.data?.data?.items : response.data?.items;
            // Trả về mảng rỗng nếu dữ liệu không phải là mảng để tránh lỗi
            return Array.isArray(dataItems) ? dataItems : [];
        });

        return items;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

// Hàm xây dựng URL dựa trên filters
const buildFilterURL = (filters = {}) => {
    const params = [];

    // Thêm các filter vào URL nếu có
    if (filters.genre) params.push(`genre=${filters.genre}`);
    if (filters.country) params.push(`country=${filters.country}`);
    if (filters.year) params.push(`year=${filters.year}`);
    if (filters.language) params.push(`voice=${filters.language}`);
    if (filters.arrange) params.push(`type=${filters.arrange}`);
    if (filters.form) params.push(`form=${filters.form}`);

    // Nối các params thành chuỗi URL
    return params.length > 0 ? `?${params.join('&')}` : '';
};
