import React from 'react';
import { ScrollDestination } from 'components/ScrollTo';
import { mount } from 'enzyme';

describe('(Component ScrollTo) ScrollDestination', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      identifier: 'scroll-to-here',
      children: [
        <h1 key='contents' id="scroll-contents">Scroll To Me</h1>
      ]
    };
    _wrapper = mount(<ScrollDestination {..._props} />);
  });

  it('Should have an `id` of the identifier prop passed to it', () => {
    expect(_wrapper.find('.scroll-to-destination')).to.have.attr('id', _props.identifier);
  });

  it('Should render children when passed through props', () => {
    expect(_wrapper.find('#scroll-contents')).to.exist;
  });
});
