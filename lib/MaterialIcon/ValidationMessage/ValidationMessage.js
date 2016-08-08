import React, { PropTypes } from 'react';
import classes from './ValidationMessage.scss';

export const ValidationMessage = ({ errors = [] }: MessageProps) => (
  <div className='validationMessage'>
    {errors.length
      ? <span className={classes.message}>{errors[0]}</span>
      : ''}
  </div>
);

type MessageProps = {
  errors: string[]
};

ValidationMessage.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default ValidationMessage;
