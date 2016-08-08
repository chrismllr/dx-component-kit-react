import React from 'react';
import { TitleText } from 'components/LockupText';
import { mount } from 'enzyme';

describe('(Component) TitleText', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      theme: 'white',
      titleText: 'Title Text',
      titleWeight: 'heavy',
      titleSize: 'default',
      titleCase: 'default',
      titleLetterSpacing: 'default'
    };
    _wrapper = mount(<TitleText {..._props} />);
  });

  it('Should render the proper `h` tag based on the `titleSize` prop', () => {
    expect(_wrapper.find('h4')).to.exist;
  });

  it('Should have innerText that matches props.titleText', () => {
    expect(_wrapper.find('h4')).to.have.text(_props.titleText);
  });

  it('Should have class `title--$$` based on props.titleSize', () => {
    expect(_wrapper.find('h4')).to.have.className(`title--${_props.titleSize}`);
  });

  it('Should have class `title--case--$$` based on props.titleWeight', () => {
    expect(_wrapper.find('h4')).to.have.className(`title--${_props.titleWeight}`);
  });

  it('Should have class `title--$$` based on props.titleCase', () => {
    expect(_wrapper.find('h4')).to.have.className(`title--case--${_props.titleCase}`);
  });

  it('Should have class `title--spacing--$$` based on props.titleLetterSpacing', () => {
    expect(_wrapper.find('h4')).to.have.className(`title--spacing--${_props.titleLetterSpacing}`);
  });

  it('Should have class `title--theme--$$` based on props.theme', () => {
    expect(_wrapper.find('h4')).to.have.className(`title--theme--${_props.theme}`);
  });
});
