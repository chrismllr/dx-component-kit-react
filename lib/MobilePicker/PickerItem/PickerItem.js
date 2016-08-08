import React from 'react';
import classes from '../MobilePicker.scss';

export const PickerItem = (props: {
  onClick: Function,
  value: any,
  prop: string,
  isActive: boolean,
  index: number
}) => {
  const pickerClick = (e) => {
    props.onClick(props.prop, e);
  };

  return (
    <div
      onClick={pickerClick}
      data-value={props.value}
      data-index={props.index}
      className={`${props.isActive
        ? 'active'
        : ''} ${classes.picker__item}`}>
      <p>{props.value}</p>
    </div>
  );
};

export default PickerItem;
