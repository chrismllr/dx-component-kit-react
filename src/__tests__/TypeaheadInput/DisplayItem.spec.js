import React from 'react';
import DisplayItem from 'components/TypeaheadInput/DisplayItem';
import { shallow } from 'enzyme';

describe('(Component) DisplayItem', () => {
  let _wrapper, _props, _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      item: { name: 'Hi!' },
      displayProp: 'name',
      removeItem: (_spies.removeItem = sinon.spy())
    };
    _wrapper = shallow(<DisplayItem {..._props} />);
  });

  it('Should render a `li`', () => {
    expect(_wrapper.find('li')).to.exist;
  });

  describe('The DisplayItem `li`', () => {
    it('Should render text based on the displayProp passed to it', () => {
      expect(_wrapper.find('li'))
        .to.have.text(`${_props.item[_props.displayProp]}clear`);
    });

    it('Should render the string as the text, if `item` is simply a string', () => {
      _wrapper.setProps({ item: 'Hi!' });
      expect(_wrapper.find('li'))
        .to.have.text(`Hi!clear`);
    })

    it('Should fire a `removeItem` action if it is clicked', () => {
      _wrapper.find('li').simulate('click');

      _spies.removeItem.should.have.been.called;
      _spies.removeItem.should.have.been.calledWith(_props.item);
    });
  });
});
