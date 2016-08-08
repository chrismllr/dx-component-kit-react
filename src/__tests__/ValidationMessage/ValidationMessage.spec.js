import React from 'react';
import { shallow } from 'enzyme';
import ValidationMessage from 'components/ValidationMessage';

describe('(Component) ValidationMessage', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      errors: []
    };
    _wrapper = shallow(<ValidationMessage {..._props} />);
  });

  it('Should render validationMessage wrapper div', () => {
    expect(_wrapper.find('.validationMessage')).to.exist;
  });

  it('Should not render a message if there are no errors', () => {
    expect(_wrapper.find('span')).to.not.exist;
  });

  it('Should render a message if there are errors', () => {
    _wrapper.setProps({ errors: ['Is Required'] });
    expect(_wrapper.find('span')).to.exist;
  });

  it('Should render a message with correct text if there are errors', () => {
    _wrapper.setProps({ errors: ['Is Required'] });
    expect(_wrapper.find('span')).to.have.text('Is Required');
  });
});
