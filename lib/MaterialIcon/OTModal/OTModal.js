/* @flow */
import React, { PropTypes } from 'react';
import classes from './OTModal.scss';

export const OTModal = (props: {
  children: any,
  headerText: string,
  toggleProp: boolean,
  toggleModal: Function
}) => (
  props.toggleProp
    ? <div className='modal-overlay'>
      <div className={`modal ${classes.fadeInModal} ${classes.otModal}`}>
        <div className={`modal__header ${classes.modalHeader}`}>
          <h6 className={classes.headerText}>{props.headerText}</h6>
          <a className={`modal__close ${classes.modalClose}`} title='Close Modal' onClick={props.toggleModal}>
            <i className='material-icons'>highlight_off</i>
          </a>
        </div>
        <div className={`modal__body ${classes.modalBody}`}>
          {props.children}
        </div>
      </div>
    </div>
  : null
);

OTModal.propTypes = {
  children: PropTypes.node,
  headerText: PropTypes.string,
  toggleProp: PropTypes.bool,
  toggleModal: PropTypes.func
};

export default OTModal;
