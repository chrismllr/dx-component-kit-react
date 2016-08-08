import React, { PropTypes } from 'react';
import classes, { flashMessage, flashMessageIcon, flashMessageClose, flashMessageContent } from './FlashMessage.scss';

export const FlashMessage = ({ type = 'error', messageText, messageHeader, closeFlash }: FlashProps) => {
  const computedCls: Function = () => {
    let cls = [ flashMessage, classes[`flashMessage--${type}`] ];
    return cls.toString().replace(/,/g, ' ');
  };

  const computedIcon: Function = () => {
    switch (type) {
      case 'error':
        return 'highlight_off';
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
    }
  };

  return (
    <div className={computedCls()}>
      <i className={`material-icons ${flashMessageIcon}`}>{computedIcon()}</i>

      <div className={flashMessageContent}>
        <h5>{messageHeader}</h5>
        <p>{messageText}</p>
      </div>

      <a onClick={closeFlash} className={flashMessageClose}>
        <i className='material-icons'>close</i>
      </a>
    </div>
  );
};

FlashMessage.propTypes = {
  type: PropTypes.string,
  messageText: PropTypes.string,
  messageHeader: PropTypes.string,
  closeFlash: PropTypes.func
};

type FlashProps = {
  type: string,
  messageHeader: string,
  messageText: string,
  closeFlash: Function
};

export default FlashMessage;
