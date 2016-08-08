import React, { PropTypes } from 'react';
import classes from './OTList.scss';

export const OTListItem = ({ text }: OTListItemProps) => (
  <li className={classes.otListItem}>{text}</li>
);

type OTListItemProps = {
  text: string
};

OTListItem.propTypes = {
  text: PropTypes.string
};

export default OTListItem;
