import React from 'react';
import SuggestionList from 'components/TypeaheadInput/SuggestionList';
import Suggestion from 'components/TypeaheadInput/Suggestion';
import { shallow } from 'enzyme';

describe('(Component) SuggestionList', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      children: [
        <Suggestion item={{ name: 'Hi!' }} displayProp='name' key={1} />,
        <Suggestion item={{ name: 'Hi2!' }} displayProp='name' key={2} />
      ]
    };
    _wrapper = shallow(<SuggestionList {..._props} />);
  });

  it('Should render a `ul`', () => {
    expect(_wrapper.find('ul')).to.exist;
  });

  it('The `ul` should contain `Suggestion` children when passed through props', () => {
    expect(_wrapper).to.have.exactly(2).descendants(Suggestion);
  });
});
