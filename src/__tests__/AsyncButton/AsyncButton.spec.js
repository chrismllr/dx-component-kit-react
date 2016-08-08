import React from 'react';
import AsyncButton from 'components/AsyncButton';
import { mount } from 'enzyme';

describe('(Component) AsyncButton', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      isPending: false,
      isDisabled: false,
      btnText: 'Create my account',
      pendingText: 'Processing...',
      btnAction: (_spies.btnAction = sinon.spy()),
      btnAttrs: { form: 'account-form' }
    };
    _wrapper =  mount(<AsyncButton { ..._props } />);
  });

  it('Should initialize with default btn text and btn class', () => {
    expect(_wrapper.find('button')).to.have.text(_props.btnText);
    expect(_wrapper.find('button')).to.have.className('btn--default');
    expect(_wrapper.find('button')).to.not.have.className('btn--pending');
  });

  it('Should have a pending class when btn isPending', () => {
    _wrapper.setProps({ isPending: true });
    expect(_wrapper.find('button')).to.have.className('btn--pending');
    expect(_wrapper.find('button')).to.not.have.className('btn--default');
  });

  it('Should have pending text when btn isPending', () => {
    _wrapper.setProps({ isPending: true });
    expect(_wrapper.find('button')).to.have.text(_props.pendingText);
  });

  it('Should have pending class when btn isDisabled', () => {
    _wrapper.setProps({ isDisabled: true });
    expect(_wrapper.find('button')).to.have.className('btn--pending');
    expect(_wrapper.find('button')).to.not.have.className('btn--default');
  });

  it('Should be disabled when isDisabled', () => {
    _wrapper.setProps({ isDisabled: true });
    expect(_wrapper.find('button')).to.have.prop('disabled' , true);
  });

  it('Should fire btnAction when clicked', () => {
    _wrapper.find('button').simulate('click');

    _spies.btnAction.should.have.been.called;
  });
});
