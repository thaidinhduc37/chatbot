import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NavigationPage.module.scss';
import { procedures } from '~/layouts/Procedures/proceduresData';
import SupportComponent from '~/layouts/SupportComponent';

const cx = classNames.bind(styles);

function NavigationPage() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedField, setSelectedField] = useState(null);
    const [showSupport, setShowSupport] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <h2>Chọn lĩnh vực thủ tục hành chính</h2>

            {/* Nút mở menu */}
            <div className={cx('menu-container')}>
                <button className={cx('menu-button')} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    Chọn thủ tục cần thực hiện ▼
                </button>

                {/* Danh sách lĩnh vực */}
                {isDropdownOpen && (
                    <ul className={cx('dropdown')}>
                        {procedures.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    setSelectedField(item.component);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Nút hỗ trợ */}
            <button className={cx('support-button')} onClick={() => setShowSupport(true)} disabled={!selectedField}>
                Hỗ trợ
            </button>

            {/* Hiển thị component hỗ trợ */}
            {showSupport && selectedField && (
                <div className={cx('support-section')}>
                    <h3>Hỗ trợ {selectedField.name}</h3>
                    <SupportComponent component={selectedField} />
                </div>
            )}
        </div>
    );
}

export default NavigationPage;
