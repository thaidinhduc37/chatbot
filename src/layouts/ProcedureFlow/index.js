import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProcedureFlow.module.scss';
import { getFlowByProcedure } from '~/api/api';
import ProcedureStep from './ProcedureStep';

const cx = classNames.bind(styles);

function ProcedureFlow({ flowName }) {
    const [steps, setSteps] = useState([]);
    const [currentStepId, setCurrentStepId] = useState('start');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchFlow() {
            const flow = await getFlowByProcedure(flowName); // flow là mảng steps
            const hasStart = flow?.find((step) => step.id === 'start');

            setSteps(flow || []);
            setCurrentStepId(hasStart ? 'start' : flow?.[0]?.id || '');
            setHistory([]);
        }
        fetchFlow();
    }, [flowName]);

    const currentStep = steps.find((step) => step.id === currentStepId);

    const goToNext = (nextId) => {
        if (nextId) {
            setHistory((prev) => [...prev, currentStepId]);
            setCurrentStepId(nextId);
        }
    };

    const goBack = () => {
        if (history.length > 0) {
            const prev = [...history];
            const last = prev.pop();
            setHistory(prev);
            setCurrentStepId(last);
        }
    };

    if (!currentStep) return <div className={cx('step-loading')}>Đang tải...</div>;

    return (
        <div className={cx('step')}>
            <ProcedureStep step={currentStep} onNext={goToNext} />

            <div className={cx('footer')}>
                {history.length > 0 && (
                    <button className={cx('back-button')} onClick={goBack}>
                        ◀ Quay lại
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProcedureFlow;
