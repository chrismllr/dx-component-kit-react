import React, { PropTypes } from 'react';
import classes from './TypeaheadInput.scss';

export const DisplayItem = ({ item, displayProp, removeItem }: DisplayItemProps) => {
  const displayItemClick: Function = () => {
    removeItem(item);
  };

  const itemName: Function = () => {
    if (typeof item !== 'string' && item) {
      return item[displayProp];
    } else {
      return item;
    }
  };

  return (
    <li className={`${classes.display__item}`}
      onClick={displayItemClick}>
      {itemName()}
      <i className='material-icons'>clear</i>
    </li>
  );
};

DisplayItem.propTypes = {
  displayProp: PropTypes.string,
  item: PropTypes.any,
  removeItem: PropTypes.func
};

type DisplayItemProps = {
  item: any,
  displayProp: string,
  removeItem: Function
};

export default DisplayItem;
