import React, { PropTypes } from 'react';

export const GridItem = ({
  children,
  spacing = 'default',
  itemWidth = 'default'
}) => {
  const computedClass = () => {
    const classes = ['FlexGrid__item'];

    classes.push(`FlexGrid__item--${itemWidth}`);
    classes.push(`FlexGrid__item--gutter--${spacing}`);

    return classes.toString().replace(/,/g, ' ');
  };

  return (
    <div className={computedClass()}>{children}</div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.string,
  itemWidth: PropTypes.string
};

export default GridItem;
