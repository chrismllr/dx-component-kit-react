import React from 'react';
import { bindActionCreators } from 'redux';
import TextInput from 'components/TextInput';
import { mount } from 'enzyme';

describe('(Component) TextInput', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      value: 'Chris',
      recordField: 'userName',
      inputAttrs: {
        autoComplete: 'off'
      },
      onFocus: (_spies.onFocus = sinon.spy()),
      onChange: (_spies.onChange = sinon.spy()),
      onBlur: (_spies.onBlur = sinon.spy()),
      onKeyUp: (_spies.onKeyUp = sinon.spy()),
      onKeyDown: (_spies.onKeyDown = sinon.spy())
    };
    _wrapper = mount(<TextInput {..._props} />);
  });

  describe('Upon render, the component...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
    });

    it('Should have the correct `value` when passed a `value` in props', () => {
      const val = _wrapper.props().value;
      expect(_inputElement).to.have.value(val);
    });

    it('Should have input attributes that match all passed in `inputAttrs` prop', () => {
      const inputAttrs = _wrapper.props().inputAttrs;
      expect(_inputElement).to.have.attr('autocomplete', inputAttrs.autoComplete);
    });

    it('Should have `id` and `name` attributes that match the `recordField` prop', () => {
      const recordField = _wrapper.props().recordField;
      expect(_inputElement).to.have.attr('id', recordField);
      expect(_inputElement).to.have.attr('name', recordField);
    });
  });

  describe('When the input\'s onChange fires...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
    });

    it('Should dispatch `onChange` action', () => {
      const event2 = { target: { value: 'ChrisM' } };
      _inputElement.simulate('change', event2);
      _spies.onChange.should.have.been.called;
    });
  });

  describe('The input\'s default onFocus', () => {
    it('Should call `props.onFocus` if provided', () => {
      _wrapper.find('input').simulate('focus');
      _spies.onFocus.should.have.been.called;
    });
  });

  describe('The input\'s default onBlur', () => {
    it('Should call `props.onBlur` if provided', () => {
      _wrapper.find('input').simulate('blur');
      _spies.onBlur.should.have.been.called;
    });
  });

  describe('The input\'s default onKeyUp', () => {
    it('Should call `props.onKeyUp` if provided', () => {
      _wrapper.find('input').simulate('keyup');
      _spies.onKeyUp.should.have.been.called;
    });
  });

  describe('The input\'s default onKeyDown', () => {
    it('Should call `props.onKeyDown` if provided', () => {
      _wrapper.find('input').simulate('keydown');
      _spies.onKeyDown.should.have.been.called;
    });
  });
});
