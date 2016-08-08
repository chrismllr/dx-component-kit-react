import React from 'react';
import assert from 'helpers/Assert';
const Scroll = require('react-scroll');
const { animateScroll } = Scroll;

// React-Scroll used for this component
// https://www.npmjs.com/package/react-scroll
// ====================================================

export const ScrollButton = ({ to, btnText, btnClass, callback, duration = 800, offset = 0 }: ScrollButtonProps) => {
  const scrollToDestination: Function = (e) => {
    const scrollDestination = document.getElementById(`${to}`) || e.target;

    assert(
      `No ScrollDestination element defined for the ScrollButton pointing to "#${to}"`,
      scrollDestination
    );

    animateScroll.scrollTo(scrollDestination.offsetTop + parseInt(offset), { duration });
    setTimeout(callback, duration);
  };

  return (
    <button className={btnClass} onClick={scrollToDestination}>{btnText}</button>
  );
};

ScrollButton.propTypes = {
  to: React.PropTypes.string,
  offset: React.PropTypes.any,
  btnText: React.PropTypes.string,
  btnClass: React.PropTypes.string,
  callback: React.PropTypes.func,
  duration: React.PropTypes.number
};

type ScrollButtonProps = {
  to: string,
  offset: any,
  btnText: string,
  btnClass: string,
  callback: Function,
  duration: number
};

export default ScrollButton;
