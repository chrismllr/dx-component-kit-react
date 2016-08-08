import React, { PropTypes } from 'react';
import classes from './OTList.scss';

export const OTList = ({ children }: OTListProps) => (
  <ul className={classes.otList}>
    {children}
  </ul>
);

type OTListProps = {
  children: any
};

OTList.propTypes = {
  children: PropTypes.node
};

export default OTList;
