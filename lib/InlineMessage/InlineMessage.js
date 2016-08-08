import React from 'react';
import classes, { notification, messageItem, messageList, closeMessage } from './InlineMessage.scss';

export const InlineMessage = ({ type = 'error', messages = [], closeMsg }: MsgProps) => {
  const computedCls: Function = () => {
    let cls = [ notification, classes[`notification--${type}`] ];
    return cls.toString().replace(/,/g, ' ');
  };

  return (
    <div className={computedCls()}>
      {typeof messages === 'string'
        ? messages
        : <ul className={messageList}>
          {messages.map((msg) => <li className={messageItem}>{msg}</li>)}
        </ul>
      }

      <a onClick={closeMsg} className={closeMessage}>
        <i className='material-icons'>close</i>
      </a>
    </div>
  );
};

type MsgProps = {
  type: string,
  messages: any,
  closeMsg: Function
};

export default InlineMessage;
