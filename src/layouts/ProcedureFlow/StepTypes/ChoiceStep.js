import classNames from 'classnames/bind';
import styles from '../ProcedureFlow.module.scss';

const cx = classNames.bind(styles);

function ChoiceStep({ step, onNext }) {
    return (
        <>
            <p className={cx('procedure-question')}>{step.question}</p>
            <ul className={cx('procedure-options')}>
                {step.options.map((option, idx) => (
                    <li
                        key={idx}
                        className={cx('procedure-option-item')}
                        onClick={() => onNext(option.next)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ChoiceStep;
