import classNames from 'classnames/bind';
import styles from '../ProcedureFlow.module.scss';

const cx = classNames.bind(styles);

function InfoStep({ step, onNext }) {
    return (
        <>
            <p className={cx('procedure-question')}>{step.question}</p>
            <button className={cx('procedure-button')} onClick={() => onNext(step.next)}>
                Đã hiểu
            </button>
        </>
    );
}
export default InfoStep;
