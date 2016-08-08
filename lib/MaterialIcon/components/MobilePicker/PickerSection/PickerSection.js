import React from 'react';
import classes from '../MobilePicker.scss';

const ITEM_HEIGHT = 40;

export const PickerSection = (props: {
  children: any,
  prop: string,
  vals: string[],
  className: string,
  selectedVal: string,
  increase: Function,
  decrease: Function
}) => {
  const renderChildren = () => {
    return React.Children.map(
      props.children,
      (child) => React.cloneElement(child, { ...props })
    );
  };

  const setTranslateState = (index) => ({
    transition: '.3s ease-in-out',
    transform: `translate3d(0, ${-(index * ITEM_HEIGHT - ITEM_HEIGHT)}px, 0)`
  });

  const style = () =>
    setTranslateState(props.vals.indexOf(props.selectedVal));

  const increase = () =>
    props.increase(props.prop, props.vals, props.selectedVal);

  const decrease = () =>
    props.decrease(props.prop, props.vals, props.selectedVal);

  return (
    <div className={`${classes.picker__section}
      ${props.className}`}>

      <a className={`${classes.picker__change} ${classes['picker__change--decrease']}`}
        onClick={decrease}>
        <i className='spark-icon-arrow-chevron-up'></i>
      </a>

      <div className={classes.picker__section__spinner}>
        <div style={style()}>
          {renderChildren()}
        </div>
      </div>

      <a className={`${classes.picker__change} ${classes['picker__change--increase']}`}
        onClick={increase}>
        <i className='spark-icon-arrow-chevron-down'></i>
      </a>
    </div>
  );
};

export default PickerSection;
