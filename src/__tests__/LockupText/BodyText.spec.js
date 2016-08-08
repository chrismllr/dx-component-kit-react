import React from 'react';
import { BodyText } from 'components/LockupText';
import { mount } from 'enzyme';

describe('(Component) BodyText', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      theme: 'white',
      bodyText: 'Title Text',
      bodyWeight: 'regular',
      bodySize: 'default'
    };
    _wrapper = mount(<BodyText {..._props} />);
  });

  it('Should render the proper `h` tag based on the `bodySize` prop', () => {
    expect(_wrapper.find('p')).to.exist;
  });

  it('Should have innerText that matches props.bodyText', () => {
    expect(_wrapper.find('p')).to.have.text(_props.bodyText);
  });

  it('Should have class `body--$$` based on props.bodySize', () => {
    expect(_wrapper.find('p')).to.have.className(`body--${_props.bodySize}`);
  });

  it('Should have class `body--$$` based on props.bodyWeight', () => {
    expect(_wrapper.find('p')).to.have.className(`body--${_props.bodyWeight}`);
  });

  it('Should have class `body--theme--$$` based on props.theme', () => {
    expect(_wrapper.find('p')).to.have.className(`body--theme--${_props.theme}`);
  });
});
