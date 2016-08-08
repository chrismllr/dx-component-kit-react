import React from 'react';
import { bindActionCreators } from 'redux';
import TextInput from 'components/TextInput';
import ValidationMessage from 'components/ValidationMessage';
import OTInput from 'components/OTInput';
import classes from 'components/OTInput/OTInput.scss';

import { mount } from 'enzyme';

describe('(Component) OTInput', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      label: 'User Name',
      value: 'Chris',
      validate: ['required'],
      recordField: 'userName',
      validationErrors: [],
      inputAttrs: {
        autoComplete: 'off'
      },
      formatInput: 'formatDate',
      onFocus: (_spies.onFocus = sinon.spy()),
      onBlur: (_spies.onBlur = sinon.spy()),
      onKeyUp: (_spies.onKeyUp = sinon.spy()),
      ...bindActionCreators({
        onChange: (_spies.onChange = sinon.spy()),
        addValidationErrors: (_spies.addValidationErrors = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };
    _wrapper = mount(<OTInput {..._props} />);
  });

  describe('Upon render, the component...', () => {
    let _label;
    let _inputElement;

    beforeEach(() => {
      _label = _wrapper.find('label');
      _inputElement = _wrapper.find(TextInput);
    });

    it('Should have the correct `label` when passed a `label` in props', () => {
      const label = _wrapper.props().label;
      expect(_label).to.have.text(label);
    });

    it('Should contain a TextInput with the correct value passed to it', () => {
      const val = _wrapper.props().value;
      expect(_inputElement).to.have.value(val);
    });

    it('Should contain a TextInput with attributes that match all passed in `inputAttrs` prop', () => {
      const inputAttrs = _wrapper.props().inputAttrs;
      expect(_inputElement.find('input')).to.have.attr('autocomplete', inputAttrs.autoComplete);
    });

    it('Should contain a TextInput with `id` and `name` attributes that match the `recordField` prop', () => {
      const recordField = _wrapper.props().recordField;
      expect(_inputElement.find('input')).to.have.attr('id', recordField);
      expect(_inputElement.find('input')).to.have.attr('name', recordField);
    });
  });

  describe('When component is provided the `validate` prop...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
    });

    it('Should dispatch `addValidationErrors` onBlur when event violates validation', () => {
      const event1 = { target: { value: '' } };
      _spies.dispatch.should.have.not.been.called;

      _inputElement.simulate('blur', event1);

      _spies.dispatch.should.have.been.called;
      _spies.addValidationErrors.should.have.been.called;
    });
  });

  describe('When the input\'s onChange fires...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
    });

    it('Should dispatch `onChange` action', () => {
      const event2 = { target: { value: 'ChrisM' } };
      _spies.dispatch.should.have.not.been.called;

      _inputElement.simulate('change', event2);

      _spies.dispatch.should.have.been.called;
      _spies.onChange.should.have.been.called;
    });
  });

  describe('The input\'s default onFocus', () => {
    it('Should call `props.onFocus` if provided', () => {
      _wrapper.find('input').simulate('focus');
      _spies.onFocus.should.have.been.called;
    });
  });

  describe('The input\'s default onKeyUp', () => {
    it('Should call `props.onKeyUp` if provided', () => {
      _wrapper.find('input').simulate('keyup');
      _spies.onKeyUp.should.have.been.called;
    });


    it('Should dispatch correct `formatInput` action when provided', () => {
      const event3 = { target: { value: '12' }, which: 50 };
      _wrapper.find('input').simulate('keyup', event3);

      _spies.onChange.should.have.been.calledWith('userName', '12/');
    });
  });

  describe('The input\'s default onBlur', () => {
    it('Should call `props.onBlur` if provided', () => {
      _wrapper.find('input').simulate('blur');
      _spies.onBlur.should.have.been.called;
    });

    it('Should trim whitespace and fire onChange with that trimmed value', () => {
      _wrapper.setProps({ value: 'Chris ' }),
      _wrapper.find('input').simulate('blur');

      _spies.onBlur.should.have.been.called;
      _spies.onChange.should.have.been.calledWith('userName', 'Chris');
    });
  });

  describe('When the input has validation errors', () => {
    it('Should have the correct error class if input is not dirty', () => {
      _wrapper.find('input').simulate('blur', { target: { value: '' } });
      _wrapper.setProps({ validationErrors: ['Is required.'] });

      _wrapper.setState({ isDirty: true });
      expect(_wrapper.find('.ot-input')).to.not.have.className(`${classes['otInput--error']}`);
      _wrapper.setState({ isDirty: false });
      expect(_wrapper.find('.ot-input')).to.have.className(`${classes['otInput--error']}`);
    });
  });
});
