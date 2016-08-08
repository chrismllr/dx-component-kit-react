import React, { PropTypes } from 'react';
import classes from './ProgressBar.scss';

export const Milestone = ({
  number,
  currentStep,
  numberOfSteps,
  final
 }: MilestoneProps) => {
  const isCompletedCls: Function = (): string => {
    const percentageDone = currentStep / numberOfSteps * 100;
    const stepIsAtPercent = number / 3 * 100 - 32;

    if (percentageDone >= stepIsAtPercent) {
      return classes['milestone__badge--completed'];
    }
    return '';
  };

  const finalCls: Function = (): string => {
    const percentageDone = currentStep / numberOfSteps * 100;
    if (final && percentageDone === 100) {
      return classes.finalBadgeComplete;
    }
    return '';
  };

  return (
    <div className={`${classes.milestone} ${classes[`milestone--${number}`]}`}>
      <span className={`
        ${classes.milestone__badge}
        ${isCompletedCls()}
        ${finalCls()}
      `}>
        <p>{number}</p>
      </span>
    </div>
  );
};

type MilestoneProps = {
  number: number,
  currentStep: number,
  numberOfSteps: number,
  final: boolean
};

Milestone.propTypes = {
  number: PropTypes.number,
  currentStep: PropTypes.number,
  numberOfSteps: PropTypes.number,
  final: PropTypes.bool
};

export default Milestone;
