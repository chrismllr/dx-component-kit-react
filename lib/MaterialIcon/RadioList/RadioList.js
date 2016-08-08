import React from 'react';
import classes from './RadioButton.scss';

export const RadioList = (props: {
  recordField: string,
  onChange: Function,
  selectedValue: string,
  options: string[],
  children: any
}) => {
  const renderChildren = (props) => {
    return React.Children.map(
      props.children,
      (child) => React.cloneElement(child, { ...props })
    );
  };

  return (
    <fieldset className={`row ${classes.radioBtn__list}`}
      id={props.recordField}>
      {renderChildren(props)}
    </fieldset>
  );
};

export default RadioList;
