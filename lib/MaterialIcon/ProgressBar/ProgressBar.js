import React, { PropTypes } from 'react';
import Milestone from './Milestone';
import classes from './ProgressBar.scss';

export const ProgressBar = (props: ProgressBarProps) => {
  const progress: Function = (): Object => {
    const percent = (props.currentStep / props.numberOfSteps) * 100;
    return { width: `${percent}%` };
  };

  return (
    <div className={classes.progressBar}>
      <div className={classes.currentProgress} data-ref='progress-indicator' style={progress()}></div>

      <Milestone number={1} {...props} />
      <Milestone number={2} {...props} />
      <Milestone number={3} {...props} />
      <Milestone number={4} {...props} final />
    </div>
  );
};

type ProgressBarProps = {
  currentStep: number,
  numberOfSteps: number
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number,
  numberOfSteps: PropTypes.number
};

export default ProgressBar;
