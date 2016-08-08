import React, { PropTypes } from 'react';
import classes from './TypeaheadInput.scss';

export const SuggestionList = ({ children }: SuggListProps) => (
  <ul className={classes.suggestion__list}>
    {children}
  </ul>
);

SuggestionList.propTypes = {
  children: PropTypes.node
};

type SuggListProps = {
  children: any
};

export default SuggestionList;
