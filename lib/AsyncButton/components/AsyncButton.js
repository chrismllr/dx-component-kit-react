import React, { PropTypes } from 'react';
import { noop } from 'utils/js-utils';

export const AsyncButton = ({
  isPending = false,
  isDisabled = false,
  btnText = 'Click here',
  pendingText = 'Processing your request...',
  className,
  btnAttrs = {},
  btnAction = noop
}) => {
  const computedCls = () => {
    let cls = [ 'btn', className ];

    if (isPending || isDisabled) {
      cls.push('btn--pending');
    } else {
      cls.push('btn--default');
    }

    return cls.toString().replace(/,/g, ' ');
  };

  const computedTxt =
    isPending
      ? pendingText
      : btnText;

  return (
    <button
      {...btnAttrs}
      className={computedCls()}
      onClick={btnAction}
      disabled={isDisabled || isPending}>

      {computedTxt}
    </button>
  );
};

AsyncButton.propTypes = {
  isPending: PropTypes.bool,
  isDisabled: PropTypes.bool,
  btnText: PropTypes.string,
  pendingText: PropTypes.string,
  className: PropTypes.string,
  btnAttrs: PropTypes.object,
  btnAction: PropTypes.func
};

export default AsyncButton;
