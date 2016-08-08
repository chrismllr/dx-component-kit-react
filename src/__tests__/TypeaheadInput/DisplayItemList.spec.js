import React from 'react';
import DisplayItemList from 'components/TypeaheadInput/DisplayItemList';
import DisplayItem from 'components/TypeaheadInput/DisplayItem';
import { shallow } from 'enzyme';

describe('(Component) DisplayItemList', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      children: [
        <DisplayItem item={{ name: 'Hi!' }} displayProp='name' key={1} />,
        <DisplayItem item={{ name: 'Hi2!' }} displayProp='name' key={2} />
      ]
    };
    _wrapper = shallow(<DisplayItemList {..._props} />);
  });

  it('Should render a `ul`', () => {
    expect(_wrapper.find('ul')).to.exist;
  });

  it('The `ul` should contain `DisplayItem` children when passed through props', () => {
    expect(_wrapper).to.have.exactly(2).descendants(DisplayItem);
  });
});
