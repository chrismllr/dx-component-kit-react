import React from 'react';

export const FlexGrid = ({ children }: FlexGridProps) => (
  <div className='flex-grid'>
    {children}
  </div>
);

type FlexGridProps = {
  children: any
};

export default FlexGrid;
