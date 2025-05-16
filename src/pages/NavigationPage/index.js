import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NavigationPage.module.scss';
import CanCuoc from '~/components/procedures/CanCuoc';
import CuTru from '~/components/procedures/CuTru';
import HoChieu from '~/components/procedures/HoChieu';
import DangKyXe from '~/components/procedures/DangKyXe';
import LyLichTuPhap from '~/components/procedures/LyLichTuPhap';
import GPLX from '~/components/procedures/LyLichTuPhap';
import PCCC from '~/components/procedures/LyLichTuPhap';
import ANTT from '~/components/procedures/LyLichTuPhap';

const cx = classNames.bind(styles);

const DOMAINS = [
    {
        id: 'cancuoc',
        name: 'Căn cước',
        description: 'Cấp, quản lý thẻ Căn cước',
        component: CanCuoc,
    },
    {
        id: 'cutru',
        name: 'Cư trú',
        description: 'Đăng ký, quản lý cư trú',
        component: CuTru,
    },
    {
        id: 'hochieu',
        name: 'Hộ chiếu',
        description: 'Đăng ký, quản lý xuất nhập cảnh',
        component: HoChieu,
    },
    {
        id: 'dangkyxe',
        name: 'Đăng ký xe',
        description: 'Đăng ký, sang tên phương tiện',
        component: DangKyXe,
    },
    {
        id: 'lylichtuphap',
        name: 'Lý lịch tư pháp',
        description: 'Cấp phiếu lý lịch tư pháp',
        component: LyLichTuPhap,
    },
    {
        id: 'gplx',
        name: 'Giấy phép lái xe',
        description: 'Sát hạch, cấp giấy phép lái xe',
        component: GPLX,
    },
    {
        id: 'pccc',
        name: 'Phòng cháy chữa cháy',
        description: 'Phòng cháy chữa cháy',
        component: PCCC,
    },
    {
        id: 'antt',
        name: 'Cấp giấy ANTT',
        description: 'Quản lý ngành nghề kinh doanh có điều kiện',
        component: ANTT,
    },
];

function NavigationPage() {
    const [selectedDomain, setSelectedDomain] = useState(null);

    const renderContent = () => {
        if (!selectedDomain) {
            return (
                <div className={cx('domains-grid')}>
                    {DOMAINS.map((domain) => (
                        <div key={domain.id} className={cx('domain-card')} onClick={() => setSelectedDomain(domain)}>
                            <h3 className={cx('domain-title')}>{domain.name}</h3>
                            <p className={cx('domain-desc')}>{domain.description}</p>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className={cx('procedure-card')}>
                <button className={cx('back-button')} onClick={() => setSelectedDomain(null)}>
                    ◀ Quay lại danh sách
                </button>

                {selectedDomain.component ? (
                    <selectedDomain.component />
                ) : (
                    <div className={cx('coming-soon')}>
                        <h3>Tính năng đang được phát triển</h3>
                        <p>Vui lòng quay lại sau.</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-title')}>Chọn lĩnh vực thủ tục hành chính</h1>
            {renderContent()}
        </div>
    );
}

export default NavigationPage;
