import React, { PropTypes } from 'react';
import InlineSVG from 'svg-inline-react';
import classes from './LoadingSpinner.scss';

import loader from 'static/loader.svg';

export const LoadingSpinner = ({ text = 'Processing...', noTxt, className }: SpinnerProps) => (
  <div className={`${classes.loaderContainer} ${className}`}>
    <div className={classes.loader}>
      <InlineSVG src={loader} />
      {noTxt
        ? null
        : <span className={classes.loaderText}>{text}</span>
      }
    </div>
  </div>
);

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  noTxt: PropTypes.bool
};

type SpinnerProps = {
  text: string,
  className: string,
  noTxt: boolean
};

export default LoadingSpinner;
