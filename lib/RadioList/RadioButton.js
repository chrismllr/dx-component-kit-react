import React from 'react';
import classes from './RadioButton.scss';
import conditionalClass from 'helpers/ConditionalClass';

export const RadioButton = (props: {
  label: string,
  onChange: Function,
  value: any,
  recordField: string,
  selectedValue: string,
}) => {
  const radioButtonChange: Function = (event) =>
    props.onChange(event.target.value);

  const circleCls: string = `
    material-icons
    ${classes.radioBtn__circle}
    ${conditionalClass(props.value === props.selectedValue, classes.checked)}
  `;

  const circleName: string = `
    ${props.value === props.selectedValue
      ? 'radio_button_checked'
      : 'radio_button_unchecked'
    }
  `;

  return (
    <label className={classes.radioBtn}>
      <input className={classes.radioBtn__input}
        type='radio'
        name={props.recordField}
        value={props.value}
        checked={props.value === props.selectedValue}
        onChange={radioButtonChange} />
      <i className={circleCls}>{circleName}</i>
      <span className={classes.radioBtn__label}>{props.label}</span>
    </label>
  );
};

export default RadioButton;
