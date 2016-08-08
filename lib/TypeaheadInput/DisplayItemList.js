import React, { PropTypes } from 'react';
import classes from './TypeaheadInput.scss';

export const DisplayItemList = ({ children }: DListProps) => (
  <ul className={classes.display__list}>
    {children}
  </ul>
);

DisplayItemList.propTypes = {
  children: PropTypes.node
};

type DListProps = {
  children: any
};

export default DisplayItemList;
