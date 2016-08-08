import React from 'react';

export const ScrollDestination = ({ identifier, children }: ScrollDestinationProps) => (
  <div className='scroll-to-destination' id={identifier}>
    {children}
  </div>
);

ScrollDestination.propTypes = {
  children: React.PropTypes.node,
  identifier: React.PropTypes.string
};

type ScrollDestinationProps = {
  identifier: string,
  children: any
};

export default ScrollDestination;
