import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Procedures.module.scss';

const cx = classNames.bind(styles);

const steps = [
    {
        text: 'Bước 1: Chuẩn bị hồ sơ',
        image: null,
        buttons: [{ label: 'Tải danh sách hồ sơ', link: '/files/hosocancuoc.pdf' }],
    },
    {
        text: 'Bước 2: Đăng nhập tài khoản (VNeID)',
        image: null,
        buttons: [{ label: 'Đăng nhập tại đây', link: 'https://dichvucong.bocongan.gov.vn/' }],
    },
    {
        text: 'Bước 3: Chọn loại thủ tục',
        procedures: [
            { label: 'Cấp Căn cước cho người dưới 14 tuổi', value: 'duoi14' },
            { label: 'Cấp Căn cước cho người từ đủ 14 tuổi', value: 'tren14' },
            { label: 'Cấp đổi thẻ Căn cước', value: 'capdoi' },
            { label: 'Cấp lại thẻ Căn cước', value: 'caplai' },
            { label: 'Xác nhận số CMND/CCCD', value: 'xacnhan' },
        ],
    },
];

const procedureSteps = {
    duoi14: {
        cap_tinh: [
            {
                text: 'Bước 4: Nhập thông tin và tải tài liệu',
                image: null,
                buttons: [{ label: 'Nhập thông tin', link: '/cap-tinh/duoi14' }],
            },
            {
                text: 'Bước 5: Kiểm tra và xác nhận',
                image: null,
                buttons: [{ label: 'Xác nhận', link: '/cap-tinh/duoi14-xacnhan' }],
            },
            { text: 'Bước 6: Hoàn tất', image: null, buttons: [{ label: 'Tra cứu kết quả', link: '/tracuu/duoi14' }] },
        ],
        cap_xa: [
            {
                text: 'Bước 4: Nhập thông tin',
                image: null,
                buttons: [{ label: 'Nhập thông tin', link: '/cap-xa/duoi14' }],
            },
            { text: 'Bước 5: Kiểm tra', image: null, buttons: [{ label: 'Xác nhận', link: '/cap-xa/duoi14-xacnhan' }] },
            { text: 'Bước 6: Hoàn tất', image: null, buttons: [{ label: 'Tra cứu kết quả', link: '/tracuu/duoi14' }] },
        ],
    },
    // Các thủ tục khác tương tự...
};

function CanCuoc() {
    const [selectedProcedure, setSelectedProcedure] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    return (
        <div className={cx('procedure-container')}>
            {steps.map((step, index) => (
                <div key={index} className={cx('procedure-box')}>
                    <p className={cx('procedure-text')}>{step.text}</p>
                    {step.buttons && (
                        <div className={cx('button-group')}>
                            {step.buttons.map((btn, i) => (
                                <a
                                    key={i}
                                    href={btn.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cx('button', 'button-primary')}
                                >
                                    {btn.label}
                                </a>
                            ))}
                        </div>
                    )}
                    {step.procedures && (
                        <div className={cx('dropdown-container')}>
                            <select className={cx('dropdown')} onChange={(e) => setSelectedProcedure(e.target.value)}>
                                <option value="">-- Chọn thủ tục --</option>
                                {step.procedures.map((proc, i) => (
                                    <option key={i} value={proc.value}>
                                        {proc.label}
                                    </option>
                                ))}
                            </select>
                            {selectedProcedure && (
                                <div className={cx('button-group')}>
                                    <button className={cx('button')} onClick={() => setSelectedLevel('cap_tinh')}>
                                        Cấp tỉnh
                                    </button>
                                    <button className={cx('button')} onClick={() => setSelectedLevel('cap_xa')}>
                                        Cấp xã
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
            {selectedProcedure && selectedLevel && (
                <div className={cx('procedure-details')}>
                    {procedureSteps[selectedProcedure]?.[selectedLevel]?.map((step, index) => (
                        <div key={index} className={cx('procedure-box')}>
                            <p className={cx('procedure-text')}>{step.text}</p>
                            <div className={cx('button-group')}>
                                {step.buttons.map((btn, i) => (
                                    <a
                                        key={i}
                                        href={btn.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cx('button')}
                                    >
                                        {btn.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CanCuoc;
