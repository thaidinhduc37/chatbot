import classNames from 'classnames/bind';
import styles from './ProcedureFlow.module.scss';

import ChoiceStep from './StepTypes/ChoiceStep';
import InfoStep from './StepTypes/InfoStep';
import EndStep from './StepTypes/EndStep';
import ConfirmationStep from './StepTypes/ConfirmationStep';

const cx = classNames.bind(styles);

const StepComponents = {
    choice: ChoiceStep,
    info: InfoStep,
    end: EndStep,
    confirmation: ConfirmationStep,
};

function ProcedureStep({ step, onNext }) {
    const StepComponent = StepComponents[step.type];
    return StepComponent ? (
        <div className={cx('step')}>
            <StepComponent step={step} onNext={onNext} />
        </div>
    ) : null;
}

export default ProcedureStep;
