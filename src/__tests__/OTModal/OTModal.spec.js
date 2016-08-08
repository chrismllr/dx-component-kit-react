import React from 'react';
import OTModal from 'components/OTModal';
import { mount } from 'enzyme';

describe('(Component) OTModal', () => {
  let _wrapper, _props, _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      children: <h1 id="modal-content">Hi</h1>,
      headerText: 'How It Works',
      toggleProp: true,
      toggleModal: (_spies.toggleModal = sinon.spy())
    };
    _wrapper = mount(<OTModal {..._props} />);
  });

  it('Initially is hidden', () => {
    _wrapper.setProps({ toggleProp: false });
    expect(_wrapper.find('.modal-overlay')).to.not.exist;
  });

  it('Should show up when toggleProp is true', () => {
    expect(_wrapper.find('.modal-overlay')).to.exist;
  });

  it('Should render Header text provided', () => {
    expect(_wrapper.find('h6')).to.have.text(_props.headerText);
  });

  it('Should render an icon to close the modal', () => {
    expect(_wrapper.find('a.modal__close')).to.exist;
    expect(_wrapper.find('i')).to.have.text('highlight_off');
  });

  it('Should render the children passed to it within the modal body', () => {
    expect(_wrapper.find('.modal__body').find('#modal-content')).to.exist;
  })

  describe('The modal close btn', () => {
    it('Should fire the toggleModal action when it is clicked', () => {
      _wrapper.find('a.modal__close').simulate('click');

      _spies.toggleModal.should.have.been.called;
    });
  });
});
