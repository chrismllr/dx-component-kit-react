import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollButton, ScrollDestination } from 'components/ScrollTo';
const ReactTestUtils = require('react-addons-test-utils');

describe('(Component ScrollTo) ScrollButton', () => {
  let _wrapper, _props, _spies, _renderedDOM;

  beforeEach(() => {
    _spies = {};
    _props = {
      to: 'scroll-to-here',
      btnText: 'Click to Scroll',
      duration: 1000,
      callback: (_spies.callback = sinon.spy())
    };
    _wrapper = ReactTestUtils.renderIntoDocument(
      <div>
        <ScrollButton {..._props} />
        <div id='scroll-to-here'></div>
      </div>
    );
    _renderedDOM = () => ReactDOM.findDOMNode(_wrapper);
  });

  it('Should render a `button` with `btnText`', () => {
    let _button = _renderedDOM().querySelector('button');
    expect(_button).to.exist;
    expect(_button.textContent).to.equal(_props.btnText);
  });

  it('Should scroll when button is clicked, and fire callback `duration` ms after', () => {
    let _button = _renderedDOM().querySelector('button');
    let _destination = _renderedDOM().querySelector('#scroll-to-here');

    ReactTestUtils.Simulate.click(_button, { target: _destination });
    _spies.callback.should.not.have.been.called;

    setTimeout(() => {
      _spies.callback.should.have.been.called;
    }, 1000);
  });
});
