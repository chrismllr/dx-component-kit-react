import React from 'react';
import { FlexGrid, GridItem } from 'components/FlexGrid';
import { mount } from 'enzyme';

describe('(Component) FlexGrid', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      children: [
        <GridItem spacing='default' itemWidth='default' key={1} />,
        <GridItem spacing='default' itemWidth='default' key={2} />
      ]
    };
    _wrapper = mount(<FlexGrid {..._props} />);
  });

  it('Should render a `div` with class "flex-grid"', () => {
    expect(_wrapper.find('div.flex-grid')).to.exist;
  });

  it('The FlexGrid should contain `GridItem` children when passed through props', () => {
    expect(_wrapper).to.have.exactly(2).descendants(GridItem);
  });
});
