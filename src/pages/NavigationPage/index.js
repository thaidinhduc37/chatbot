import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NavigationPage.module.scss';
import ProcedureFlow from '~/layouts/ProcedureFlow';

const cx = classNames.bind(styles);

const PROCEDURE_OPTIONS = [
    { id: 'cancuoc', name: 'Đăng ký, quản lý Căn cước' },
    { id: 'cutru', name: 'Đăng ký, quản lý cư trú' },
    { id: 'dangkyxe', name: 'Đăng ký, quản lý phương tiện GTĐB' },
    { id: 'tuphap', name: 'Cấp lý lịch tư pháp' },
    // Có thể thêm các lĩnh vực khác sau
];

function NavigationPage() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedProcedure, setSelectedProcedure] = useState(null);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Chọn lĩnh vực thủ tục hành chính</h2>

            <div className={cx('menu-container')}>
                <button className={cx('menu-button')} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {selectedProcedure ? selectedProcedure.name : 'Chọn thủ tục cần thực hiện ⬇'}
                </button>

                {isDropdownOpen && (
                    <ul className={cx('dropdown')}>
                        {PROCEDURE_OPTIONS.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    setSelectedProcedure(item);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {selectedProcedure && (
                <div className={cx('flow-section')}>
                    <ProcedureFlow flowName={selectedProcedure.id} />
                </div>
            )}
        </div>
    );
}

export default NavigationPage;
