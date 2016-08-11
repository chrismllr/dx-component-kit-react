import React from 'react';
import Dropdown from '../../../components/Dropdown';
import { mount } from 'enzyme';

describe('(Component) Dropdown', () => {
  let _props;
  let _spies;
  let _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      selectedValue: 'Option1',
      recordField: 'TestRecordField',
      options: ['Option1', 'Option2', 'Option3'],
      dropdownAttrs: {
        name: 'test-select'
      },
      onChange: (_spies.onChange = sinon.spy())
    };
    _wrapper = mount(<Dropdown {..._props} />);
  });

  describe('Upon render, the component...', () => {
    let _selectElement;

    beforeEach(() => {
      _selectElement = _wrapper.find('select');
    });

    it('Should have the correct `value` when passed a `selectedValue` in props', () => {
      const selVal = _wrapper.props().selectedValue;
      expect(_selectElement).to.have.value(selVal);
    });

    it('Should have input attributes that match all passed in `dropdownAttrs` prop', () => {
      const dropdownAttrs = _wrapper.props().dropdownAttrs;
      expect(_selectElement).to.have.attr('name', dropdownAttrs.name);
    });

    it('Should have the correct `id` when passed a `recordField` in props', () => {
      const rf = _wrapper.props().recordField;
      expect(_selectElement).to.have.id(rf);
    });

    it('Should have the same number of options as `options` in props plus one', () => {
      const numOp = _wrapper.props().options.length + 1;
      expect(_wrapper).to.have.exactly(numOp).descendants('option');
    });
  });

  describe('When a new option is selected...', () => {
    let _selectElement;

    beforeEach(() => {
      _selectElement = _wrapper.find('select');
    });

    it('Should dispatch `onChange` action', () => {
      const eventDrop = { target: { value: 'Option2' } };
      const recordField = _wrapper.props().recordField;

      _selectElement.simulate('change', eventDrop);

      _spies.onChange.should.have.been.called;
      _spies.onChange.should.have.been.calledWith(recordField, 'Option2');
    });
  });
});
