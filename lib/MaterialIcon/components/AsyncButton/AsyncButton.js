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
}: AsyncProps) => {
  const computedCls: Function = () => {
    let cls = [ 'btn', className ];

    if (isPending || isDisabled) {
      cls.push('btn--pending');
    } else {
      cls.push('btn--default');
    }

    return cls.toString().replace(/,/g, ' ');
  };

  const computedTxt: string =
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

type AsyncProps = {
  isPending: boolean,
  isDisabled: boolean,
  btnText: string,
  pendingText: string,
  className: string,
  btnAttrs: Object,
  btnAction: Function
}

export default AsyncButton;
