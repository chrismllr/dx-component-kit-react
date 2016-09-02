import React from 'react';
import { GridItem } from '../../../components/FlexGrid';
import { mount } from 'enzyme';

describe('(Component) GridItem', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      spacing: 'large',
      itemWidth: 'small',
      children: <h1>I am a child</h1>
    };
    _wrapper = mount(<GridItem {..._props} />);
  });

  it('Should render a `div`', () => {
    expect(_wrapper.find('div')).to.exist;
  });

  it('Should render any child nodes passed to it within that `div`', () => {
    expect(_wrapper.find('div').find('h1')).to.exist;
  });

  it('Should have a class relative to the `itemWidth` prop passed to it', () => {
    expect(_wrapper.find('div')).to.have.className('FlexGrid__item--small');
  });

  it('Should have a `gutter` class relative to the `spacing` prop passed to it', () => {
    expect(_wrapper.find('div')).to.have.className('FlexGrid__item--gutter--large');
  });
});
