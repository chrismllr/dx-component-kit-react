import React from 'react';
import classes from './Dropdown.scss';
import * as validators from 'helpers/Validators';
import conditionalClass from 'helpers/ConditionalClass';

export const Dropdown = ({
  label,
  selectedValue,
  recordField,
  options = [],
  onChange,
  addValidationErrors = () => {},
  className,
  validate = [],
  validationErrors = {},
  placeholder,
  dropdownAttrs = {}
}: DropdownProps) => {
  const dropdownChange: Function = (event) => onChange(recordField, event.target.value);

  const dropdownClass: string = `
    ${classes.otDropdown}
    ${conditionalClass(validationErrors.length, classes['otDropdown--error'])}
  `;

  const isValid: Function = (cb) =>
    cb(validate.reduce((memo, currentValidator) =>
      memo.concat(validators[currentValidator](selectedValue)), []));

  const onBlur: Function = (event) =>
    isValid((errors) =>
      addValidationErrors({ field: recordField, errors }));

  return (
    <div>
      <div className={dropdownClass}>
        {label
          ? <label className={classes.otDropdown__label} htmlFor={recordField}>{label}</label>
          : null
        }
        <select
          className={classes.otDropdown__select}
          id={recordField}
          value={selectedValue}
          onChange={dropdownChange}
          onBlur={onBlur}
          {...dropdownAttrs}>

          <option value=''>{placeholder || label}</option>
          {options.map((option, i) =>
            <option key={i} value={option}>{option}</option>)}
        </select>
        <i className='material-icons'>arrow_drop_down</i>
      </div>
    </div>

  );
};

type DropdownProps = {
  label: string,
  recordField: string,
  selectedValue: any,
  onChange: Function,
  addValidationErrors?: Function,
  className?: string,
  options: string[],
  validate?: string[],
  placeholder?: string,
  validationErrors?: Object,
  dropdownAttrs: Object
};

export default Dropdown;
