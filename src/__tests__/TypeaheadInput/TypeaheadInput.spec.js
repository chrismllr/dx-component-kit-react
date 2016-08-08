import React from 'react';
import { useFakeTimers } from 'sinon';
import TypeaheadInput, { DOWN, UP, ENTER, TAB } from 'components/TypeaheadInput/TypeaheadInput';
import TextInput from 'components/TextInput';
import SuggestionList from 'components/TypeaheadInput/SuggestionList';
import Suggestion from 'components/TypeaheadInput/Suggestion';
import DisplayItemList from 'components/TypeaheadInput/DisplayItemList';
import DisplayItem from 'components/TypeaheadInput/DisplayItem';
import { mount } from 'enzyme';

describe('(Component) TypeaheadInput', () => {
  let _wrapper, _spies, _props, _clock, _mockSuggestions;
  let _mimicReturnedSuggestions;

  beforeEach(() => {
    _clock = useFakeTimers();
    _spies = {};
    _mockSuggestions = [{ name: '123 Cool St' }, { name: '456 Cooler St' }];
    _props = {
      selectedItems: '',
      recordField: 'street',
      itemDisplayProp: 'name',
      label: 'Street',
      inputAttrs: { placeholder: 'Find your street...' },
      validate: ['required'],
      typeaheadRequest: (_spies.typeaheadRequest = sinon.spy()),
      typeaheadSelected: (_spies.typeaheadSelected = sinon.spy()),
      typeaheadRemoved: (_spies.typeaheadRemoved = sinon.spy())
    };
    _mimicReturnedSuggestions = () => {
      _wrapper.setState({
        showSuggestions: true,
        suggestions: _mockSuggestions,
        suggestionIndex: null
      });
    };
    _wrapper = mount(<TypeaheadInput {..._props} />);
  });

  afterEach(() => {
    _clock.restore();
  });

  it('Should render a TextInput', () => {
    expect(_wrapper.find(TextInput)).to.exist;
  });

  describe('onChange', () => {
    it('Should fire a 300ms debounced `typeaheadRequest` with correct arguments', () => {
      _wrapper.find('input').simulate('change', { target: { value: '12' } });
      _clock.tick(300); // function is debounced
      _spies.typeaheadRequest.should.have.been.called;
      _spies.typeaheadRequest.should.have.been.calledWith('street', '12', null);
    });
  });

  describe('onBlur', () => {
    it('Should hide suggestions and clear search if it exists', () => {
      _wrapper.setState({ showSuggestions: true, search: 'fdsa' });
      _wrapper.find('input').simulate('blur');

      _clock.tick(300);

      expect(_wrapper.state().search).to.equal('');
      expect(_wrapper.state().showSuggestions).to.equal(false);
    });
  });

  describe('After the response from `typeaheadRequest`', () => {
    it('Should render SuggestionList', () => {
      expect(_wrapper.find(SuggestionList)).to.not.exist;
      _mimicReturnedSuggestions();
      expect(_wrapper.find(SuggestionList)).to.exist;
    });

    it('Should render as many `Suggestion`s as there are results', () => {
      expect(_wrapper.find(SuggestionList)).to.not.exist;
      _mimicReturnedSuggestions();

      expect(_wrapper.find(SuggestionList)).to.exist;
      expect(_wrapper).to.have.exactly(_mockSuggestions.length).descendants(Suggestion);
    });
  });

  describe('Clicking a suggestion', () => {
    it('Should fire `typeaheadSelected` with the correct arguments', () => {
      _mimicReturnedSuggestions();
      _wrapper.find(Suggestion).at(0).find('li').simulate('click');
      _spies.typeaheadSelected.should.have.been.called;
      _spies.typeaheadSelected.should.have.been.calledWith('street', _mockSuggestions[0], null);
    });

    it('Should hide SuggestionList', () => {
      _mimicReturnedSuggestions();
      expect(_wrapper.find(SuggestionList)).to.exist;
      _wrapper.find(Suggestion).at(0).find('li').simulate('click');

      expect(_wrapper.find(SuggestionList)).to.not.exist;
    });

    it('Should render a DisplayItemList', () => {
      expect(_wrapper.find(DisplayItemList)).to.not.exist;
      _wrapper.setProps({ selectedItems: _mockSuggestions[0].name });
      expect(_wrapper.find(DisplayItemList)).to.exist;
    });

    it('Should render (one) DisplayItem in that list', () => {
      expect(_wrapper.find(DisplayItemList)).to.not.exist;
      _wrapper.setProps({ selectedItems: _mockSuggestions[0].name });
      expect(_wrapper).to.have.exactly(1).descendants(DisplayItem);
    });
  });

  describe('Clicking a DisplayItem', () => {
    it('Should fire `typeaheadRemoved` with the correct arguments', () => {
      _wrapper.setProps({ selectedItems: _mockSuggestions[0].name });
      _wrapper.find(DisplayItem).find('li').simulate('click');
      _spies.typeaheadRemoved.should.have.been.called;
      _spies.typeaheadRemoved.should.have.been.calledWith('street', '123 Cool St');
    });

    it('Should remove the DisplayItem', () => {
      _wrapper.setProps({ selectedItems: _mockSuggestions[0].name });

      expect(_wrapper.find(DisplayItemList)).to.exist;
      expect(_wrapper.find(DisplayItem)).to.exist;

      _wrapper.setProps({ selectedItems: '' });

      expect(_wrapper.find(DisplayItemList)).to.not.exist;
      expect(_wrapper.find(DisplayItem)).to.not.exist;
    });
  });

  describe('On the input\'s `keyup` event, a keyup with keycode for..', () => {
    describe('DOWN', () => {
      it('Should highlight / select next Suggestion', () => {
        _mimicReturnedSuggestions();

        _wrapper.find('input').simulate('keyup', { which: DOWN });
        expect(_wrapper.state().suggestionIndex).to.equal(0);
        _wrapper.find('input').simulate('keyup', { which: DOWN });
        expect(_wrapper.state().suggestionIndex).to.equal(1);
      });
    });

    describe('UP', () => {
      it('Should highlight / select previous Suggestion', () => {
        _mimicReturnedSuggestions();

        _wrapper.find('input').simulate('keyup', { which: DOWN });
        expect(_wrapper.state().suggestionIndex).to.equal(0);
        _wrapper.find('input').simulate('keyup', { which: DOWN });
        expect(_wrapper.state().suggestionIndex).to.equal(1);
        _wrapper.find('input').simulate('keyup', { which: UP });
        expect(_wrapper.state().suggestionIndex).to.equal(0);
      });
    });

    describe('ENTER', () => {
      it('Should select current Suggestion, fire `typeaheadSelected` with that item', () => {
        _mimicReturnedSuggestions();
        _wrapper.setState({ suggestionIndex: 0 });

        _wrapper.find('input').simulate('keyup', { which: ENTER });

        _spies.typeaheadSelected.should.have.been.called;
        _spies.typeaheadSelected.should.have.been.calledWith('street', _mockSuggestions[0], null);
      });

      it('If no suggestion is selected, it will fire `typeaheadSelected` with the search query', () => {
        _mimicReturnedSuggestions();
        _wrapper.setState({ search: '9304 Fernando' });

        _wrapper.find('input').simulate('keyup', { which: ENTER });

        _spies.typeaheadSelected.should.have.been.called;
        _spies.typeaheadSelected.should.have.been.calledWith('street', '9304 Fernando', null, true);
      });

      it('Should clear suggestions and hide SuggestionList', () => {
        _mimicReturnedSuggestions();

        expect(_wrapper.find(SuggestionList)).to.exist;
        _wrapper.find('input').simulate('keyup', { which: DOWN });
        _wrapper.find(Suggestion).at(0).find('li').simulate('click');

        _wrapper.setState({
          showSuggestions: false
        });

        expect(_wrapper.find(SuggestionList)).to.not.exist;
      });
    });
  });

  describe('On the input\'s `keyDown` event, a kwydown with keycode for..', () => {
    describe('TAB', () => {
      it('Should select current Suggestion, fire `typeaheadSelected` with that item', () => {
        _mimicReturnedSuggestions();
        _wrapper.setState({ suggestionIndex: 0 });

        _wrapper.find('input').simulate('keyup', { which: TAB });

        _spies.typeaheadSelected.should.have.been.called;
        _spies.typeaheadSelected.should.have.been.calledWith('street', _mockSuggestions[0], null);
      });

      it('If no suggestion is selected, it will fire `typeaheadSelected` with the search query', () => {
        _mimicReturnedSuggestions();
        _wrapper.setState({ search: '9304 Fernando' });

        _wrapper.find('input').simulate('keyup', { which: TAB });

        _spies.typeaheadSelected.should.have.been.called;
        _spies.typeaheadSelected.should.have.been.calledWith('street', '9304 Fernando', null, true);
      });

      it('Should clear suggestions and hide SuggestionList', () => {
        _mimicReturnedSuggestions();

        expect(_wrapper.find(SuggestionList)).to.exist;
        _wrapper.find('input').simulate('keyup', { which: DOWN });
        _wrapper.find(Suggestion).at(0).find('li').simulate('click');

        _wrapper.setState({
          showSuggestions: false
        });

        expect(_wrapper.find(SuggestionList)).to.not.exist;
      });
    });
  });

  describe('The loading message within the suggestion list', () => {
    it('Should display if the TypeaheadInput `isPending` is true in the state', () => {
      _mimicReturnedSuggestions();
      _wrapper.setState({ isPending: true });

      expect(_wrapper.find('[data-ref="is-pending"]')).to.exist;
      expect(_wrapper.find('[data-ref="is-pending"]')).to.have.text('Loading...');
    });
  });

  describe('The No Results message within the suggestion list', () => {
    it('Should display if the TypeaheadInput `showSuggestions` is true, and there are no suggestions', () => {
      _mimicReturnedSuggestions();
      _wrapper.setState({ suggestions: [] });

      expect(_wrapper.find('[data-ref="no-results"]')).to.exist;
      expect(_wrapper.find('[data-ref="no-results"]')).to.have.text('No results.');
    });
  });
});
