import React from 'react';
import { CheckList, CheckListItem } from 'components/CheckList';
import { mount } from 'enzyme';

describe('(Component) CheckList', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      children: [
        <CheckListItem text='Item1' key={1} />,
        <CheckListItem text='Item2' key={2} />
      ]
    };
    _wrapper = mount(<CheckList {..._props} />);
  });

  it('Should render a `ul`', () => {
    expect(_wrapper.find('ul')).to.exist;
  });

  it('The `ul` should contain `CheckListItem` children when passed through props', () => {
    expect(_wrapper).to.have.exactly(2).descendants(CheckListItem);
  });
});
