import React, { Component, PropTypes } from 'react';
import SuggestionList from './SuggestionList';
import Suggestion from './Suggestion';
import DisplayItemList from './DisplayItemList';
import DisplayItem from './DisplayItem';
import TextInput from 'components/TextInput';

import classes from './TypeaheadInput.scss';
import { isArray, isPresent } from 'utils/js-utils';
import debounce from 'lodash/debounce';

export const UP = 38;
export const DOWN = 40;
export const ENTER = 13;
export const TAB = 9;

export class TypeaheadInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      inputEl: null,
      displayItems: [],
      canAdd: true,
      isSingle: false,
      search: '',
      isFocused: false,
      suggestions: [],
      isPending: false,
      suggestionIndex: null,
      showSuggestions: false
    };

    this.debouncedOnChange = debounce(this.userInputSearch, 300);
  }

  componentWillMount () {
    this.setupDisplayItems(this.props);
    this.setCanAdd(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.setupDisplayItems(nextProps);
    this.setCanAdd(nextProps);
  }

  setCanAdd (props) {
    if (this.state.isSingle && isPresent(props.selectedItems)) {
      this.setState({ canAdd: false });
    } else if (
      !this.state.isSingle &&
      isArray(props.selectedItems) &&
      props.selectedItems.length === this.props.max
    ) {
      this.setState({ canAdd: false });
    } else {
      this.setState({ canAdd: true });
    }
  }

  setupDisplayItems (props) {
    if (!isArray(props.selectedItems) && isPresent(props.selectedItems)) {
      this.setState({
        isSingle: true,
        displayItems: [props.selectedItems]
      });
    } else if (isPresent(props.selectedItems)) {
      this.setState({ displayItems: props.selectedItems });
    } else {
      this.setState({ displayItems: null });
    }
  }

  onFocus = (e) => {
    this.setState({ 'isFocused': true });
  };

  hideSuggestions = () => {
    if (this.state.showSuggestions) {
      this.setState({
        showSuggestions: false,
        search: '',
        suggestionIndex: null
      });
    }
  };

  onBlur = () => {
    this.setState({ isFocused: false });

    if (this.state.showSuggestions) {
      setTimeout(this.hideSuggestions, 300);
    }
  };

  onChange = (e) => {
    e.persist();
    this.setState({ search: e.target.value });
    this.debouncedOnChange(e);
  };

  keyUp = (e) => {
    const { suggestions, suggestionIndex, search, showSuggestions } = this.state;
    const keyCode = e.which;
    const hasSuggestions = isPresent(suggestions);

    if (keyCode === DOWN && hasSuggestions) {
      e.preventDefault();
      if (suggestionIndex === null) {
        this.setState({ suggestionIndex: 0 });
      } else if (suggestionIndex < (suggestions.length - 1)) {
        this.setState({ suggestionIndex: suggestionIndex + 1 });
      }
    } else if (keyCode === UP && suggestionIndex !== null && hasSuggestions) {
      e.preventDefault();
      if (suggestionIndex === 0) {
        this.setState({ suggestionIndex: null });
      } else {
        this.setState({ suggestionIndex: suggestionIndex - 1 });
      }
    } else if ((keyCode === ENTER || keyCode === TAB) && (search || showSuggestions)) {
      e.preventDefault();

      if (!suggestionIndex && suggestionIndex !== 0 && isPresent(search)) {
        this.selectedSuggestion(search, true);
      } else if (hasSuggestions && (suggestionIndex || suggestionIndex === 0)) {
        this.selectedSuggestion(suggestions[suggestionIndex]);
      }
    } else if (keyCode === ENTER) {
      e.preventDefault();
    }
  };

  keyDown = (e) => {
    const keyCode = e.which;
    const { suggestions, showSuggestions, search, suggestionIndex } = this.state;
    const hasSuggestions = isPresent(suggestions);

    if (keyCode === TAB && (search || showSuggestions)) {
      if (hasSuggestions && (suggestionIndex || suggestionIndex === 0)) {
        this.selectedSuggestion(suggestions[suggestionIndex]);
      } else if (!suggestionIndex && suggestionIndex !== 0 && isPresent(search)) {
        this.selectedSuggestion(search, true);
      }
    }
  }

  userInputSearch = (e) => {
    if (e.target.value) {
      this.setState({
        search: e.target.value,
        showSuggestions: true,
        isPending: true
      });

      this.props.typeaheadRequest(
        this.props.recordField,
        e.target.value,
        this.state.displayItems,
        (suggestions) => {
          this.setState({
            suggestions: suggestions,
            suggestionIndex: null,
            isPending: false
          });
        });
    } else {
      this.setState({ showSuggestions: false });
    }
  };

  selectedSuggestion = (item, createSuggestion) => {
    this.setState({ search: '', showSuggestions: false });

    this.props.typeaheadSelected(
      this.props.recordField,
      item,
      this.state.displayItems,
      createSuggestion
    );
  };

  removeItem = (item) => {
    this.props.typeaheadRemoved(
      this.props.recordField,
      item,
      this.state.displayItems
    );
  };

  render () {
    const { search, suggestions, displayItems, showSuggestions, isPending, isFocused } = this.state;

    return (
      <div>
        <div>
          <label htmlFor={this.props.recordField}>{this.props.label}</label>
          <div className={classes.typeaheadInput__container}>
            <TextInput
              ref={this.setInputEl}
              name={this.props.recordField}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              value={search}
              onKeyUp={this.keyUp}
              onKeyDown={this.keyDown}
              disabled={!this.state.canAdd}
              onChange={this.onChange}
              inputAttrs={{
                autoComplete: 'off', ...this.props.inputAttrs
              }} />

            {
              isPresent(displayItems)
              ? (
                <DisplayItemList>
                  {displayItems.map((item, i) =>
                    <DisplayItem key={i}
                      index={i}
                      removeItem={this.removeItem}
                      displayProp={this.props.itemDisplayProp}
                      item={item} />)}
                </DisplayItemList>
              )
              : !isFocused && !search
                ? <p data-ref='placeholder' className={classes.typeaheadInput__placeholder}>
                  {this.props.placeholder || 'Search...'}
                </p>
                : null
            }
          </div>
        </div>
        {
          showSuggestions
          ? <SuggestionList>
              {
                isPending
                ? <p data-ref='is-pending' className={classes.typeaheadLoading}>Loading...</p>
                : isPresent(suggestions)
                  ? suggestions.map((sug, i) =>
                    <Suggestion key={i}
                      item={sug}
                      index={i}
                      suggestionIndex={this.state.suggestionIndex}
                      displayProp={this.props.itemDisplayProp}
                      onClick={this.selectedSuggestion} />)
                  : <p data-ref='no-results' className={classes.typeaheadLoading}>No results.</p>
              }
          </SuggestionList>
          : null
        }
      </div>
    );
  }

}

TypeaheadInput.propTypes = {
  selectedItems: PropTypes.any,
  typeaheadFocused: PropTypes.func,
  typeaheadRequest: PropTypes.func,
  typeaheadSelected: PropTypes.func,
  typeaheadRemoved: PropTypes.func,
  recordField: PropTypes.string.isRequired,
  itemDisplayProp: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  max: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputAttrs: PropTypes.object,
  addValidationErrors: PropTypes.func,
  validationErrors: PropTypes.array
};

export default TypeaheadInput;
