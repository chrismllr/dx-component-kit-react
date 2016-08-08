import React, { PropTypes } from 'react';

export const MaterialIcon = ({ iconName, className }: MaterialIconProps) => (
  <i className={`material-icons ${className}`}>{iconName}</i>
);

MaterialIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string
};

type MaterialIconProps = {
  className?: string,
  iconName: string
};

export default MaterialIcon;
