import React, { PropTypes } from 'react';
import classes from './TypeaheadInput.scss';
import conditionalClass from 'helpers/ConditionalClass';

export const Suggestion = ({ item, displayProp, index, onClick, suggestionIndex }: SuggProps) => {
  const suggestionClick: Function = () => {
    onClick(item);
  };

  const isItemAtIndex: Function = () => {
    return index === suggestionIndex;
  };

  return (
    <li className={`${classes.suggestion__item} ${conditionalClass(isItemAtIndex(), classes.selected)}`}
      onClick={suggestionClick}>
      {item[displayProp]}
    </li>
  );
};

Suggestion.propTypes = {
  displayProp: PropTypes.string,
  item: PropTypes.object,
  index: PropTypes.number,
  suggestionIndex: PropTypes.number,
  onClick: PropTypes.func
};

type SuggProps = {
  item: Object,
  displayProp: string,
  index: number,
  suggestionIndex: number,
  onClick: Function
};

export default Suggestion;
