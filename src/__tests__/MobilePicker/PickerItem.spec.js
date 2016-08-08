import React from 'react';
import PickerItem from 'components/MobilePicker/PickerItem';
import { days } from 'utils/date-generator';
import { mount } from 'enzyme';

describe.skip('(Component) MobilePicker/PickerItem', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      prop: 'day',
      value: days()[0],
      onClick: (_spies.onClick = sinon.spy()),
      index: '0',
      isActive: true
    };

    _wrapper = mount(<PickerItem {..._props} />);
  });

  describe('Upon render, the component...', () => {
    it('Should render a div with a `data-value` that matches `props.value`', () => {
      expect(_wrapper.find('div')).to.have.attr('data-value', _props.value);
    });

    it('Should render a div with a `data-value` that matches `props.value`', () => {
      expect(_wrapper.find('div')).to.have.attr('data-value', _props.value);
    });

    it('Should render a p tag within this div with text that matches `props.value`', () => {
      expect(_wrapper.find('div')).to.have.text(_props.value);
    });
  });

  describe('When the `PickerItem` is clicked', () => {
    it('Should call the `onClick` function', () => {
      _spies.onClick.should.not.have.been.called;

      _wrapper.find('div').simulate('click');

      _spies.onClick.should.have.been.called;
    });

    it('With the correct arguments', () => {
      _wrapper.find('div').simulate('click');

      _spies.onClick.should.have.been.calledWith(_props.prop);
    });
  });
});
