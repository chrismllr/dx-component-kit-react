import React from 'react';
import { bindActionCreators } from 'redux';
import Dropdown from 'components/Dropdown';
import { mount } from 'enzyme';

describe('(Component) Dropdown', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      label: 'TestDropdown',
      selectedValue: 'Option1',
      recordField: 'TestRecordField',
      validate: ['required'],
      options: ['Option1', 'Option2', 'Option3'],
      validationErrors: [],
      dropdownAttrs: {
        name: 'test-select'
      },
      ...bindActionCreators({
        onChange: (_spies.onChange = sinon.spy()),
        addValidationErrors: (_spies.addValidationErrors = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };
    _wrapper = mount(<Dropdown {..._props} />);
  });

  describe('Upon render, the component...', () => {
    let _selectElement;
    let _labelElement;

    beforeEach(() => {
      _selectElement = _wrapper.find('select');
      _labelElement = _wrapper.find('label');
    });

    it('Should display the correct `label` when passed a `label` in props', () => {
      const label = _wrapper.props().label;
      expect(_labelElement).to.have.text(label);
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

  describe('When component is provided the `validate` prop...', () => {
    let _selectElement;

    beforeEach(() => {
      _selectElement = _wrapper.find('select');
    });

    it('Should dispatch `addValidationErrors` onBlur when event violates validation', () => {
      const event1 = { target: { value: '' } };
      _spies.dispatch.should.have.not.been.called;

      _selectElement.simulate('blur', event1);

      _spies.dispatch.should.have.been.called;
      _spies.addValidationErrors.should.have.been.called;
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

      _spies.dispatch.should.have.not.been.called;

      _selectElement.simulate('change', eventDrop);

      _spies.dispatch.should.have.been.called;
      _spies.onChange.should.have.been.called;
      _spies.onChange.should.have.been.calledWith(recordField, 'Option2');
    });
  });
});
