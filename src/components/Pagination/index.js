import { useState } from 'react';
import classNames from 'classnames/bind';

import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({ totalPages, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPagesToShow = 5;
    const pages = [];

    // Tạo mảng trang để hiển thị
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page); // Gọi hàm từ component cha để xử lý thay đổi trang
    };

    return (
        <div className="pagination">
            <ul className={cx('list')}>
                {currentPage > 1 && (
                    <li key="prev" className={cx('item')}>
                        <Button
                            className={cx('pagination-btn')}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            title={'←'}
                        />
                    </li>
                )}
                {pages.slice(0, maxPagesToShow).map((page) => (
                    <li key={page} className={cx('item')}>
                        <Button
                            className={cx('pagination-btn', { active: page === currentPage })}
                            onClick={() => handlePageChange(page)}
                            title={page}
                        />
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li key="next" className={cx('item')}>
                        <Button
                            className={cx('pagination-btn')}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            title={'→'}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
