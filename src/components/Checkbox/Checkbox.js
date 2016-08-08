import React, { PropTypes } from 'react';
import condClass from '../../utils/conditional-class';
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxBox,
  CheckboxBoxChecked
} from './Checkbox.scss';

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
    <label className={`${props.className} ${CheckboxLabel}`} htmlFor={props.recordField}>
      <input className={CheckboxInput}
        type='checkbox'
        id={props.recordField}
        value={props.value}
        onChange={checkboxChange}
        checked={isChecked()}
      />

      <span className={`${CheckboxBox} ${condClass(isChecked(), CheckboxBoxChecked)}`}>
        <i className='material-icons'>check</i>
      </span>

      {props.label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  recordField: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  collection: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.any
};

export default Checkbox;
