import classNames from "classnames/bind";
import styles from "../Procedures.module.scss";

const cx = classNames.bind(styles);

function Dangkyxe() {
    const steps = [
        { text: "Bước 1: Chuẩn bị hồ sơ", buttons: [{ label: "Tiếp tục", link: "/buoc-2" }] },
        { text: "Bước 2: Điền thông tin vào biểu mẫu", buttons: [{ label: "Quay lại", link: "/buoc-1" }, { label: "Tiếp tục", link: "/buoc-3" }] },
        { text: "Bước 3: Nộp hồ sơ tại cơ quan chức năng", buttons: [{ label: "Quay lại", link: "/buoc-2" }, { label: "Tiếp tục", link: "/buoc-4" }] },
        { text: "Bước 4: Nhận giấy hẹn", buttons: [{ label: "Quay lại", link: "/buoc-3" }, { label: "Chờ kết quả", link: "/buoc-5" }] },
        { text: "Bước 5: Chờ xét duyệt", buttons: [{ label: "Quay lại", link: "/buoc-4" }, { label: "Tiếp tục", link: "/buoc-6" }] },
        { text: "Bước 6: Nhận kết quả", buttons: [{ label: "Quay lại", link: "/buoc-5" }, { label: "Hoàn tất", link: "/buoc-7" }] },
        { text: "Bước 7: Hoàn tất thủ tục", buttons: [{ label: "Xong", link: "/hoan-tat" }] },
    ];

    return (
        <div className={cx("procedure-container")}>
            {steps.map((step, index) => (
                <div key={index} className={cx("procedure-box")}>
                    <p className={cx("procedure-text")}>{step.text}</p>
                    <div className={cx("button-group")}>
                        {step.buttons.map((btn, i) => (
                            btn.link ? (
                                <a key={i} href={btn.link} className={cx("button")}>
                                    {btn.label}
                                </a>
                            ) : (
                                <button key={i} className={cx("button")}>
                                    {btn.label}
                                </button>
                            )
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dangkyxe;
