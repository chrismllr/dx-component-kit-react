import React from 'react';
import Suggestion from 'components/TypeaheadInput/Suggestion';
import { shallow } from 'enzyme';

const INITAL_BG = '#fff';
const SELECTED_BG = 'rgba(#E8ECF0, .8)';

describe('(Component) Suggestion', () => {
  let _wrapper, _props, _spies;

  beforeEach(() => {
    _spies = {};
    _props = {
      item: { name: 'Hi!' },
      displayProp: 'name',
      onClick: (_spies.onClick = sinon.spy()),
      index: 0,
      suggestonIndex: 2
    };
    _wrapper = shallow(<Suggestion {..._props} />);
  });

  it('Should render a `li`', () => {
    expect(_wrapper.find('li')).to.exist;
  });

  describe('The Suggestion `li`', () => {
    it('Should render text based on the displayProp passed to it', () => {
      expect(_wrapper.find('li'))
        .to.have.text(`${_props.item[_props.displayProp]}`);
    });

    it('Should fire an `onClick` action if it is clicked', () => {
      _wrapper.find('li').simulate('click');

      _spies.onClick.should.have.been.called;
      _spies.onClick.should.have.been.calledWith(_props.item);
    });

    it('Should have a different background color if its index = suggestionIndex', () => {
      expect(_wrapper.find('li')).to.have.style({ backgroundColor: INITAL_BG } );

      _wrapper.setProps({ suggestionIndex: 0 });
      expect(_wrapper.find('li')).to.have.style({ backgroundColor: SELECTED_BG } );
    });
  });
});
