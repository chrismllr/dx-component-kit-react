import React from 'react';
import { bindActionCreators } from 'redux';
import Checkbox from 'components/Checkbox';
import { mount } from 'enzyme';

describe('(Component) Checkbox', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {}
    _props = {
      label: 'TestingCheck',
      recordField: 'TestingCheck',
      value: 'Testme1',
      checked: true,
      ...bindActionCreators({
        onChange: (_spies.onChange = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper =  mount(<Checkbox { ..._props } />);
  });

  describe('Upon render, the component...', () => {
    let _label;
    let _inputElement;

    beforeEach(() => {
      _label = _wrapper.find('label');
      _inputElement = _wrapper.find('input');
    });

    it('Should have the correct `label` when passed a `label` in props', () => {
      const label = _wrapper.props().label;
      expect(_label).to.have.text(`check${label}`);
    });

    it('Should have the correct `value` when passed a `value` in props', () => {
      const val = _wrapper.props().value;
      expect(_inputElement).to.have.value(val);
    });

    it('Without a collection, have the correct `checked` when passed a `checked` in props', () => {
      const val = _wrapper.props().checked;
      expect(_inputElement).to.have.prop('checked', val);
    });

    it('With a collection, have the correct `checked` value', () => {
      _wrapper.setProps({ collection: ['Testme1', 'Testme2', 'Testme3'], value: 'Testme1' });
      expect(_wrapper.find('input')).to.have.prop('checked', true);
      _wrapper.setProps(_props);
    });

  });

  describe('When the input\'s onChange fires...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
    });

    it('Should dispatch `onChange` action', () => {
      const event2 = { target: { value: 'Testme1', checked: false }};
      _spies.dispatch.should.have.not.been.called;

      _inputElement.simulate('change', event2);

      _spies.dispatch.should.have.been.called;
      _spies.onChange.should.have.been.called;
      _spies.onChange.should.have.been.calledWith(_wrapper.props().recordField, event2.target.checked);
    });

  });

  describe('When a collection IS passed...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
      _wrapper.setProps({ collection: ['Testme1', 'Testme2', 'Testme3'], value: 'Testme1' });
    });

    afterEach(() => {
      _wrapper.setProps(_props);
    })

    it('Should be checked only when `value` in props is included in `collection` in props', () => {
      expect(_inputElement).to.be.checked();
    });
  });

  describe('When a collection IS NOT passed...', () => {
    let _inputElement;

    beforeEach(() => {
      _inputElement = _wrapper.find('input');
    });

    it('Should be checked only if `checked` in props is true', () => {
      const check = _wrapper.props().checked;

      if (check) {
        expect(_inputElement).to.be.checked();
      } else {
        expect(_inputElement).to.not.be.checked();
      }
    });

  });


});
