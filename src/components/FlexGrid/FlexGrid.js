import React, { PropTypes } from 'react';

export const FlexGrid = ({ children }) => (
  <div className='FlexGrid__grid'>
    {children}
  </div>
);

FlexGrid.propTypes = {
  children: PropTypes.node
};

export default FlexGrid;
