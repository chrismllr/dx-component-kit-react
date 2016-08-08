import React from 'react';

export const GridItem = ({
  children,
  spacing = 'default',
  itemWidth = 'default'
}: GridItemProps) => {
  const computedClass = () => {
    let classes = ['grid-item'];

    classes.push(`grid-item--${itemWidth}`);
    classes.push(`grid-item--gutter--${spacing}`);
    return classes.toString().replace(/,/g, ' ');
  };

  return (
    <div className={computedClass()}>{children}</div>
  );
};

type GridItemProps = {
  children: any
};

export default GridItem;
