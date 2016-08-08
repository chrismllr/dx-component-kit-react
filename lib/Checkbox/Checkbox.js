import React, { PropTypes } from 'react';
import classes from './Checkbox.scss';
import conditionalClass from 'helpers/ConditionalClass';

export const Checkbox = (props) => {
  const checkboxChange = (event) =>
    props.onChange(props.recordField, event.target.checked);

  const isChecked = () => {
    if (props.collection) {
      return props.collection.indexOf(props.value) >= 0;
    }

    return props.checked;
  };

  return (
    <label className={`${props.className} ${classes.label}`} htmlFor={props.recordField}>
      <input className={classes.input}
        type='checkbox'
        id={props.recordField}
        value={props.value}
        onChange={checkboxChange}
        checked={isChecked()} />

      <span className={`${classes.box} ${conditionalClass(isChecked(), classes.boxChecked)}`}>
        <i className='material-icons'>check</i>
      </span>
      {props.label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  recordField: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  collection: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.any
};

export default Checkbox;
