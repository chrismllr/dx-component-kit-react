import React from 'react'
import FlashMessage from '../../../components/FlashMessage';
import { mount } from 'enzyme'

describe('(Component) FlashMessage', () => {
  let _props;
  let _spies;
  let _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      type: 'success',
      messageHeader: 'You have successfully submitted payment info.',
      messageText: 'You have successfully submitted payment info.',
      closeFlash: (_spies.closeFlash = sinon.spy())
    };
    _wrapper = mount(<FlashMessage {..._props} />);
  });

  it('Should render correct class based on type', () => {
    expect(_wrapper.props().type).to.equal('success');
    expect(_wrapper.find('.flashMessage')).to.have.className('flashMessage--success');

    _wrapper.setProps({ type: 'error' });
    expect(_wrapper.find('.flashMessage')).to.have.className('flashMessage--error');
  });

  it('Should render the correct icon based on type', () => {
    expect(_wrapper.props().type).to.equal('success');
    expect(_wrapper.find('i.flashMessageIcon')).to.have.text('check_circle');

    _wrapper.setProps({ type: 'error' });
    expect(_wrapper.find('i.flashMessageIcon')).to.have.text('highlight_off');
  })

  describe('The close icon...', () => {
    it('Should dispatch a `closeFlash` action when clicked', () => {
      _wrapper.find('.flashMessageClose').simulate('click');
      _spies.closeFlash.should.have.been.called;
    });
  });
});
