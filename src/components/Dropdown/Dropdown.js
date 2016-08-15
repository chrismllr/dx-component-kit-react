import React, { PropTypes } from 'react';

export const Dropdown = ({
  selectedValue,
  recordField,
  options = [],
  className,
  onChange,
  placeholder,
  dropdownAttrs = {}
}) => {
  const dropdownChange = (event) =>
    onChange(recordField, event.target.value);

  return (
    <div className={`Dropdown ${className}`}>
      <select
        className='Dropdown__select'
        id={recordField}
        value={selectedValue}
        onChange={dropdownChange}
        {...dropdownAttrs}
      >
        <option value=''>{placeholder || 'Select an option'}</option>
        {options.map((option, i) =>
          <option key={i} value={option}>{option}</option>
        )}
      </select>
      <i className='material-icons'>arrow_drop_down</i>
    </div>
  );
};

Dropdown.propTypes = {
  recordField: PropTypes.string,
  selectedValue: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  dropdownAttrs: PropTypes.object
};

export default Dropdown;
